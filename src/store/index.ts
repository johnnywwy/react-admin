import { create } from 'zustand'

export const useStore = create<{
  collapsed: boolean
  currentMenu: string
  updateCollapsed: () => void
  setCurrentMenu: (currentMenu: string) => void
}>((set) => ({
  collapsed: false,
  currentMenu: '/dashboard',
  updateCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  setCurrentMenu: () => set((state) => ({ currentMenu: state.currentMenu }))
}))