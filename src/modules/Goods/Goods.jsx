import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../redux/fetchGoods";
import { Card } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import s from "./goods.module.scss";

export const Goods = () => {
	const dispatch = useDispatch();
	const { items: goods, status: goodsStatus, error } = useSelector((state) => state.goods);

	useEffect(() => {
		if (goodsStatus === 'idle') {
			dispatch(fetchGoods());
		}
	}, [dispatch, goodsStatus])

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

