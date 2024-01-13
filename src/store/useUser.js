import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set) => ({
      user: undefined,
      setUser: (newUser) => set({ user: newUser }),
      clearUser: () => set({ user: undefined }),
    }),
    {
      name: 'user',
    },
  ),
)