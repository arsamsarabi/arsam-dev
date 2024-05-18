import { create } from 'zustand'

interface BurgerState {
  isOpen: boolean
  toggle: () => void
  open: () => void
  close: () => void
}

export const useBurgerStore = create<BurgerState>()((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
