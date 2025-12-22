"use client";
import React, { createContext, useContext, useState } from "react";

interface DemoContextType {
  isOpen: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDemoModal = () => setIsOpen(true);
  const closeDemoModal = () => setIsOpen(false);

  return (
    <DemoContext.Provider value={{ isOpen, openDemoModal, closeDemoModal }}>
      {children}
    </DemoContext.Provider>
  );
}

export const useDemoModal = () => {
  const context = useContext(DemoContext);
  if (!context) throw new Error("useDemoModal must be used within DemoProvider");
  return context;
};