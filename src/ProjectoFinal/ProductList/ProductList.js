import TopBanner from "../Home/TopBanner/TopBanner";
import Menu from "../Home/Menu/Menu";
import DisplayBanner from "../Home/DisplayBanner/DisplayBanner";
import Footer from "../Home/Footer/Footer";
import Shop from "./Shop/Shop";
import DropDown from "./DropDowmn/DropDown";

function ProductList() {
    return (
      <div className="home">
        <TopBanner />
        <Menu />
        <DisplayBanner />
        <DropDown/>
        <Shop/>
        <Footer />
      </div>
    );
  }
  
  export default ProductList;