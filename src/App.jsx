
import { Footer } from "./modules/Footer/Footer";
import { Goods } from "./modules/Goods/Goods";
import { Header } from "./modules/Header/Header";
import { Hero } from "./modules/Hero/Hero";
import { Filter } from "./modules/Filter/Filter";
import { Subscribe } from "./modules/Subscribe/Subscribe";
import { Order } from "./modules/Order/Order";

export const App = () => {
	return (
		<>
			{/* header */}
			<Header />
			{/* /header */}

			{/* main */}
			<main>
				{/* hero */}
				<Hero />
				{/* /hero */}

				{/* filter */}
				<Filter />
				{/* /filter */}

				{/* Goods */}
				<Goods />
				{/* /Goods */}
				{/* subscribe */}
				<Subscribe />
				{/* /subscribe */}
			</main>
			{/* /main */}
			{/* footer */}
			<Footer />
			{/* / footer */}

			{/* order */}
			<Order />
			{/* /order */}
		</>
	)
}


