import useProductStore from "../components/store/useProductStore";


const usePaginatedProducts = () => {
  const {
    products,
    selectedCategory,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    searchQuery,
  } = useProductStore()

  // Filter by category
  let filtered = [...products];

  if (selectedCategory !== "All Products") {
    if (selectedCategory === "NewArrivals") {
      filtered = filtered.filter(
        (product) => product.NewArrivals || product.newarrival
      );
    } else {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
  }

  // Then filter by search query
  if (searchQuery.trim() !== "") {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filtered.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return {
    currentProducts,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};

export default usePaginatedProducts;
