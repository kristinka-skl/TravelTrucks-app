import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper } from '../types/camper';

interface FavoritesStore {
  favorites: Camper[];
  toggleFavorite: (camper: Camper) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (camper) => {
        const { favorites } = get();
        const isFavorite = favorites.some((fav) => fav.id === camper.id);

        if (isFavorite) {
          set({ favorites: favorites.filter((fav) => fav.id !== camper.id) });
        } else {
          set({ favorites: [...favorites, camper] });
        }
      },
    }),
    {
      name: 'camper-favorites',
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
