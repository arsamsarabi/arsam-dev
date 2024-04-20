import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BurgerState {
  isOpen: boolean
  toggle: () => void
  open: () => void
  close: () => void
}

export const useBurgerStore = create<BurgerState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        toggle: () => set((state) => ({ isOpen: !state.isOpen })),
        open: () => set({ isOpen: true }),
        close: () => set({ isOpen: false }),
        // increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: 'burger-storage',
      }
    )
  )
)
