import { create } from 'zustand';
import { FilterFormValues } from '../types/camper';
import { persist } from 'zustand/middleware';
interface CamperFiltersStore {
  filters: FilterFormValues;
  setFilters: (filters: FilterFormValues) => void;
  clearFilters: () => void;
}

const emptyFilters: FilterFormValues = {
  location: '',
  equipment: [],
  type: '',
};

export const useCamperFiltersStore = create<CamperFiltersStore>()(
  persist(
    (set) => ({
      filters: emptyFilters,
      setFilters: (filters) => set(() => ({ filters: filters })),
      clearFilters: () => set(() => ({ filters: emptyFilters })),
    }),
    {
      name: 'camper-filters',
      partialize: (state) => ({ filters: state.filters }),
    }
  )
);
