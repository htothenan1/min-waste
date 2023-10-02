"use client"

import { DndProvider } from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"

const CustomDragProvider = ({ children }) => {
  return <DndProvider backend={TouchBackend}>{children}</DndProvider>
}

export default CustomDragProvider
