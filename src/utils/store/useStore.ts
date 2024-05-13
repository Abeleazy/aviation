import { create } from "zustand";

interface IUserRole {
  id: number;
  name: string;
}

const userRole: IUserRole[] = [];

export const useStore = create((set) => ({
  openBeneficiary: false,
  openContract: false,
  userRole: userRole,
  addBeneficiaryModal: (openBeneficiary) => set({ openBeneficiary }),
  addContractModal: (openContract) => set({ openContract }),
  addUserRole: (userRole) => set({ userRole }),
}));
