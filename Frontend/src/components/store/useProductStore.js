// context/useProductStore.js
import { create } from "zustand";

const useProductStore = create((set) => ({
  // STATE
  products: [],
  selectedCategory: "All Products",
  currentPage: 1,
  itemsPerPage: 8,
  searchQuery: "",
  //  ACTIONS (state updaters)
  setProducts: (products) => set({ products }),
  setSelectedCategory: (category) =>
    set({ selectedCategory: category, currentPage: 1 }), // reset to page 1 on filter change
  setCurrentPage: (page) => set({ currentPage: page }),
  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),

  // NEW: Async action to fetch products
  fetchProducts: async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      set({ products: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useProductStore;
