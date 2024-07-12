import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import s from "./goods.module.scss";
// ?состановился на 1:58 (загрузить на render для api вызова)
export const Goods = () => {
	const dispatch = useDispatch();
	const { items: goods } = useSelector((state) => state.goods);

	return (
		<section className={s.goods}>
			<div className={classNames("container", s.container)}>
				<div className={s.box}>
					<h2 className={s.title}>Цветы</h2>
					<ul className={s.list}>
						{goods.map((item) => (
							<li key={item.id} className="goods__item" >
								<Card className="goods__card" {...item} />
							</li>
						))}
					</ul>
				</div>
				<Cart />
			</div>
		</section >
	)
}

