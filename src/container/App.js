import React from "react";
import ProductNav from "../components/ProductNav/ProductNav";
import MainNav from "../components/MainNav/MainNav";
import Hero from "../components/Hero/Hero";
import MediaSlider from "../components/MediaSlider/MediaSlider";
import DesktopLibrary from "../components/Desktop_library/DesktopLibrary";
import EquipmentVisual from "../components/EquipmentVisual/EquipmentVisual";
import Footer from "../components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<header className="">
				<ProductNav />
				<MainNav />
			</header>
			<Hero />
			<MediaSlider />
			<DesktopLibrary />
			<EquipmentVisual />
			<Footer />
		</div>
	);
}

export default App;
