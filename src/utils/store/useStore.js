import { create } from "zustand";

export const useStore = create((set) => ({
  openBeneficiary: false,
  openContract: false,
  addBeneficiaryModal: (openBeneficiary) => set({ openBeneficiary }),
  addContractModal: (openContract) => set({ openContract }),
}));
