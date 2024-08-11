import { create } from "zustand";

interface useFormStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const UseRestaurant = create<useFormStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
    console.log(true);
  },
  onClose: () => set({ isOpen: false }),
}));
