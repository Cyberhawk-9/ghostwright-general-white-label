"use client"

import { useState, useEffect } from "react"
import { Settings, LogOut, Type, ChevronLeft, Move, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { VisualEditor } from "@/components/visual-editor"

type EditMode = "menu" | "text" | "visual"

const PRESET_COLORS = {
  blue: "#06a0c7",
  pink: "#b41be3",
  grey: "#b8c0cc",
}

const FONT_SIZES = [10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 56, 64, 72, 80, 96]

const FONTS = [
  { value: "Inter", label: "Inter (Sans)" },
  { value: "Sora", label: "Sora (Display)" },
  { value: "Arial", label: "Arial" },
  { value: "Georgia", label: "Georgia" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
]

export function AdminToolbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showSignOutDialog, setShowSignOutDialog] = useState(false)
  const [signOutText, setSignOutText] = useState("")
  const [editMode, setEditMode] = useState<EditMode>("menu")
  const [visualEditorEnabled, setVisualEditorEnabled] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  // Text editing states
  const [selectedText, setSelectedText] = useState<HTMLElement | null>(null)
  const [currentFontSize, setCurrentFontSize] = useState(16)
  const [currentColor, setCurrentColor] = useState(PRESET_COLORS.blue)
  const [currentFont, setCurrentFont] = useState("Inter")
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [customColor, setCustomColor] = useState("#06a0c7")

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/check", {
          credentials: "include",
        })
        if (response.ok) {
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      }
    }
    checkAuth()
  }, [])

  // Enable text editing mode
  useEffect(() => {
    if (!isAuthenticated || editMode !== "text") return

    const handleSelection = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Skip if clicking on toolbar or dialogs
      if (target.closest("[data-admin-toolbar]") || target.closest('[role="dialog"]')) {
        return
      }

      // Check if target is editable text
      if (
        target.tagName === "P" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "H5" ||
        target.tagName === "H6" ||
        target.tagName === "SPAN" ||
        target.tagName === "LI" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        // Get computed styles
        const styles = window.getComputedStyle(target)
        const fontSize = Number.parseInt(styles.fontSize)
        const color = styles.color
        const fontFamily = styles.fontFamily.split(",")[0].replace(/['"]/g, "")

        setSelectedText(target)
        setCurrentFontSize(fontSize)
        setCurrentColor(rgbToHex(color))
        setCurrentFont(fontFamily)

        // Make contentEditable
        target.contentEditable = "true"
        target.focus()
      }
    }

    // Prevent default click behavior on interactive elements in edit mode
    const preventClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a") || target.closest("button") || target.closest('[role="button"]')) {
        if (!target.closest("[data-admin-toolbar]")) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
    }

    document.addEventListener("click", handleSelection)
    document.addEventListener("click", preventClick, true)

    return () => {
      document.removeEventListener("click", handleSelection)
      document.removeEventListener("click", preventClick, true)
    }
  }, [isAuthenticated, editMode])

  const handleSignOut = async () => {
    if (signOutText.toLowerCase() !== "sign-out") {
      alert("Please type 'sign-out' to confirm")
      return
    }

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      })
      setIsAuthenticated(false)
      setShowSignOutDialog(false)
      setVisualEditorEnabled(false)
      window.location.href = "/"
    } catch (error) {
      console.error("Sign out failed:", error)
    }
  }

  const handleManualSave = async () => {
    setIsSaving(true)
    setSaveStatus("saving")

    try {
      // Trigger a full save of all visual editor data
      const event = new CustomEvent("admin-save-all")
      window.dispatchEvent(event)

      // Wait a bit for saves to complete
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSaveStatus("saved")
      setTimeout(() => setSaveStatus("idle"), 2000)
    } catch (error) {
      console.error("Save failed:", error)
      setSaveStatus("error")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  const changeFontSize = (delta: number) => {
    if (!selectedText) return
    const newSize = currentFontSize + delta
    if (newSize >= 1 && newSize <= 100) {
      selectedText.style.fontSize = `${newSize}px`
      setCurrentFontSize(newSize)
    }
  }

  const setFontSize = (size: number) => {
    if (!selectedText) return
    selectedText.style.fontSize = `${size}px`
    setCurrentFontSize(size)
  }

  const changeColor = (color: string) => {
    if (!selectedText) return
    selectedText.style.color = color
    setCurrentColor(color)
  }

  const changeFont = (font: string) => {
    if (!selectedText) return
    selectedText.style.fontFamily = font
    setCurrentFont(font)
  }

  const rgbToHex = (rgb: string): string => {
    const result = rgb.match(/\d+/g)
    if (!result) return "#000000"
    const [r, g, b] = result.map(Number)
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
  }

  const toggleVisualEditor = () => {
    const newState = !visualEditorEnabled
    setVisualEditorEnabled(newState)
    setEditMode(newState ? "visual" : "menu")
    setShowSettings(false)
  }

  if (!isAuthenticated) return null

  return (
    <>
      <VisualEditor enabled={visualEditorEnabled} />

      {/* Fixed toolbar in bottom right */}
      <div className="fixed bottom-6 right-6 flex gap-3 z-50" data-admin-toolbar>
        {/* Sign Out Button */}
        <button
          onClick={() => setShowSignOutDialog(true)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          style={{ backgroundColor: PRESET_COLORS.pink }}
          aria-label="Sign out"
        >
          <LogOut className="w-6 h-6 text-white" />
        </button>

        {/* Settings Button */}
        <button
          onClick={() => setShowSettings(true)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          style={{ backgroundColor: PRESET_COLORS.blue }}
          aria-label="Settings"
        >
          <Settings className="w-6 h-6 text-white" />
        </button>
      </div>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-md fixed bottom-24 right-6 translate-x-0 translate-y-0" data-admin-toolbar>
          {editMode === "menu" || editMode === "visual" ? (
            <>
              <DialogHeader>
                <DialogTitle>Admin Tools</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 py-4">
                <Button
                  variant={visualEditorEnabled ? "default" : "outline"}
                  className={`w-full justify-start gap-2 h-12 ${visualEditorEnabled ? "bg-[#06a0c7] hover:bg-[#06a0c7]/90" : "bg-transparent"}`}
                  onClick={toggleVisualEditor}
                >
                  <Move className="w-5 h-5" />
                  {visualEditorEnabled ? "Disable Visual Editor" : "Enable Visual Editor"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 h-12 bg-transparent"
                  onClick={() => setEditMode("text")}
                >
                  <Type className="w-5 h-5" />
                  Text Styling
                </Button>
              </div>
              {visualEditorEnabled && (
                <div className="text-xs text-muted-foreground border-t pt-4 space-y-1">
                  <p>
                    <strong>Visual Editor Controls:</strong>
                  </p>
                  <p>• Draw a box around elements to select them</p>
                  <p>• Drag selected elements to move them</p>
                  <p>• Double-click text to edit it</p>
                  <p>• Right-click selected element to copy</p>
                  <p>• Right-click elsewhere to paste</p>
                  <p>• Press Escape to deselect</p>
                  <p>• All changes save automatically</p>
                </div>
              )}

              <div className="border-t pt-4">
                <Button
                  onClick={handleManualSave}
                  disabled={isSaving}
                  className="w-full gap-2"
                  variant={saveStatus === "saved" ? "default" : "outline"}
                >
                  <Save className="w-4 h-4" />
                  {saveStatus === "saving" && "Saving..."}
                  {saveStatus === "saved" && "Saved!"}
                  {saveStatus === "error" && "Error - Try Again"}
                  {saveStatus === "idle" && "Save All Changes"}
                </Button>
              </div>
            </>
          ) : editMode === "text" ? (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => setEditMode("menu")} className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <DialogTitle>Text Styling</DialogTitle>
                </div>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="text-sm text-muted-foreground">Click on any text to select and style it.</div>

                {selectedText && (
                  <>
                    {/* Font Size */}
                    <div className="space-y-2">
                      <Label>Font Size</Label>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => changeFontSize(-1)}>
                          -
                        </Button>
                        <Select value={currentFontSize.toString()} onValueChange={(val) => setFontSize(Number(val))}>
                          <SelectTrigger className="w-24">
                            <SelectValue>{currentFontSize}px</SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {FONT_SIZES.map((size) => (
                              <SelectItem key={size} value={size.toString()}>
                                {size}px
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm" onClick={() => changeFontSize(1)}>
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Color */}
                    <div className="space-y-2">
                      <Label>Text Color</Label>
                      <div className="flex gap-2 mb-2">
                        <button
                          onClick={() => changeColor(PRESET_COLORS.blue)}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                          style={{ backgroundColor: PRESET_COLORS.blue }}
                          aria-label="Blue"
                        />
                        <button
                          onClick={() => changeColor(PRESET_COLORS.pink)}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                          style={{ backgroundColor: PRESET_COLORS.pink }}
                          aria-label="Pink"
                        />
                        <button
                          onClick={() => changeColor(PRESET_COLORS.grey)}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                          style={{ backgroundColor: PRESET_COLORS.grey }}
                          aria-label="Grey"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        className="w-full"
                      >
                        {showColorPicker ? "Hide" : "Show"} Color Picker
                      </Button>
                      {showColorPicker && (
                        <div className="space-y-2 p-3 border rounded-lg">
                          <Input
                            type="color"
                            value={customColor}
                            onChange={(e) => {
                              setCustomColor(e.target.value)
                              changeColor(e.target.value)
                            }}
                            className="w-full h-12 cursor-pointer"
                          />
                          <Input
                            type="text"
                            value={customColor}
                            onChange={(e) => {
                              setCustomColor(e.target.value)
                              if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                changeColor(e.target.value)
                              }
                            }}
                            placeholder="#06a0c7"
                            className="font-mono"
                          />
                        </div>
                      )}
                    </div>

                    {/* Font Family */}
                    <div className="space-y-2">
                      <Label>Font</Label>
                      <Select value={currentFont} onValueChange={changeFont}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {FONTS.map((font) => (
                            <SelectItem key={font.value} value={font.value}>
                              {font.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </div>

              <div className="border-t pt-4">
                <Button
                  onClick={handleManualSave}
                  disabled={isSaving}
                  className="w-full gap-2"
                  variant={saveStatus === "saved" ? "default" : "outline"}
                >
                  <Save className="w-4 h-4" />
                  {saveStatus === "saving" && "Saving..."}
                  {saveStatus === "saved" && "Saved!"}
                  {saveStatus === "error" && "Error - Try Again"}
                  {saveStatus === "idle" && "Save All Changes"}
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>

      <Dialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
        <DialogContent className="max-w-sm fixed bottom-24 right-6 translate-x-0 translate-y-0" data-admin-toolbar>
          <DialogHeader>
            <DialogTitle>Confirm Sign Out</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              Type <strong>sign-out</strong> to confirm you want to sign out of admin mode.
            </p>
            <Input
              type="text"
              value={signOutText}
              onChange={(e) => setSignOutText(e.target.value)}
              placeholder="Type 'sign-out'"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSignOut()
                }
              }}
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowSignOutDialog(false)
                  setSignOutText("")
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button onClick={handleSignOut} className="flex-1">
                Sign Out
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
