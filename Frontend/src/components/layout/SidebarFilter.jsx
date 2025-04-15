import useProductStore from "../store/useProductStore";
import useToggleStore from "../store/useToggleStore";
import { FiMenu } from "../ui/Icons";

const categories = [
  "All Products",
  "NewArrivals",
  "Nike",
  "Adidas",
  "Fila",
  "UnderArmour",
];

const SidebarFilter = () => {
  const { selectedCategory, setSelectedCategory, setSearchQuery } =
    useProductStore();
  const { toggleFilter, isFilterOpen } = useToggleStore();

  return (
    <div className="">
      <div className="bg-white shadow-md rounded-lg p-4 hidden md:block">
        <div>
          <h1 className="text-3xl font-semibold">Filters</h1>
          <div className="border-b-white/5 border mt-5" />
          <div className="flex flex-col text-left">
            {categories.map((category) => (
              <div
                key={category}
                className={`cursor-pointer ${
                  selectedCategory === category ? "font-bold text-blue-600" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Menuburger */}
      <div className="relative flex items-center justify-between md:hidden">
        <FiMenu size={30} onClick={toggleFilter} />
        {isFilterOpen && (
          <div className="absolute top-15 left-5">
            <div className="flex flex-col text-left bg-white px-10 py-10">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`cursor-pointer ${
                    selectedCategory === category
                      ? "font-bold text-blue-600"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        )}
        <input
          type="text"
          className="2xl:w-[500px]  rounded-full bg-gray-200 pl-12 py-3 pr-4 focus:outline-none"
          placeholder="Search for products..."
          onChange={(e) => setSearchQuery(e.target.value)} //update searchQuery state
        />
      </div>
    </div>
  );
};

export default SidebarFilter;
