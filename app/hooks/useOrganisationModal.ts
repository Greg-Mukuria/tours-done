import { create } from 'zustand';

interface OrganisationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useOrganisationModal = create<OrganisationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useOrganisationModal;