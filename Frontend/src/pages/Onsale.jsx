import Header from "../components/layout/Header";
import styles from "../styles/twStyles";
import SidebarFilter from "../components/layout/SidebarFilter";
import ProductGrid from "../components/product/ProductGrid";

import Offers from "../components/sections/Home/Offers";
import Footers from "../components/sections/Home/Footers";

const Onsale = () => {
  return (
    <main>
      <Header />
      <div className={`${styles.paddings} container mx-auto`}>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Sidebar on the left */}
          <div className="w-full md:w-[200px]">
            <SidebarFilter />
          </div>
          {/* right for photogridList */}
          <ProductGrid />
        </div>
      </div>
      <Offers />
      <Footers />
    </main>
  );
};

export default Onsale;
