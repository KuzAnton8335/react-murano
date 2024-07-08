import classNames from "classnames";
import { goodsArray } from "../../../goodsArray";
import { Card } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import s from "./goods.module.scss";

export const Goods = () => {
	return (
		<section className={s.goods}>
			<div className={classNames("container", s.container)}>
				<div className={s.box}>
					<h2 className={s.title}>Цветы</h2>
					<ul className={s.list}>
						{goodsArray.map((item) => (
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

