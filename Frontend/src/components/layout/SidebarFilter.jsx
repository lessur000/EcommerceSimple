import useProductStore from "../store/useProductStore";


const categories = [
  'All Products',
  'NewArrivals',
  'Nike',
  'Adidas',
  'Fila',
  'UnderArmour',
];

const SidebarFilter = () => {
  const {selectedCategory, setSelectedCategory} = useProductStore()
  
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div>
        <h1 className="text-3xl font-semibold">Filters</h1>
        <div className="border-b-white/5 border mt-5" />
        <div className="flex flex-col text-left">
          {categories.map((category) => (
            <div
            key={category}
            className={`cursor-pointer ${
              selectedCategory === category ? 'font-bold text-blue-600' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
