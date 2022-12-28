import TopBanner from "./TopBanner/TopBanner";
import Menu from "./Menu/Menu";
import DisplayBanner from "./DisplayBanner/DisplayBanner";
import TopCard from "./TopProducts/TopProducts";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Looks from "./Looks/Looks";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <TopBanner />
      <Menu />
      <DisplayBanner />
      <TopCard />
      <div className="about_looks">
        <About />
        <Looks />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
