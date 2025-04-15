import { create } from "zustand";

const useToggleStore = create((set) => ({
  // Cart toggle
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  //NavToggle
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  openNav: () => set({ isNavOpen: true }),
  closeNav: () => set({ isNavOpen: false }),
  //Dropdown Toggle
  isDropdownOpen: false,
  toggleDropdown: () => set((state) => ({isDropdownOpen: !state.isDropdownOpen})),
  openDropdown: () => set({isDropdownOpen: true}),
  closeDropdown: () => set({isDropdownOpen: false}),
  //User toggle
  isUserOpen: false,
  toggleUser: () => set((state) => ({isUserOpen: !state.isUserOpen})),
  openUser: () => set({isUserOpen: true}),
  closeUser: () => set({isUserOpen: false}),
  //Form toggle
  isFormOpen: false,
  toggleForm: () => set((state) => ({isFormOpen: !state.isFormOpen})),
  openForm: () => set({isFormOpen: true}),
  closeForm: () => set({isFormOpen: false}),
  //filter toggle
  isFilterOpen: false,
  toggleFilter: () => set((state) => ({isFilterOpen: !state.isFilterOpen})),
  openFilter: () => set({isFilterOpen: true}),
  closeFilter: () => set({isFilterOpen: false}),


}));

export default useToggleStore;
