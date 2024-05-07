import { create } from "zustand"

interface NavState {
  isHeader: boolean
  isSidebar: boolean
  isSidebarActive: boolean
  toggleNav: () => void
  toggleSidebar: (isSidebarActive: boolean) => void
}

export const useNavStore = create<NavState>()((set) => ({
  isHeader: false,
  isSidebar: true,
  isSidebarActive: false,
  toggleNav: () =>
    set((state) => ({
      isSidebar: !state.isSidebar,
      isHeader: !state.isHeader,
    })),
  toggleSidebar: (isSidebarActive: boolean) => set({ isSidebarActive }),
}))
