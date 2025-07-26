import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, Theme } from '@/types';

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      isMenuOpen: false,
      activeSection: 'home',
      
      setTheme: (theme: Theme) => set({ theme }),
      
      toggleMenu: () => set((state) => ({ 
        isMenuOpen: !state.isMenuOpen 
      })),
      
      setActiveSection: (section: string) => set({ 
        activeSection: section 
      }),
    }),
    {
      name: 'portfolio-store',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);