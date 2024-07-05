import s from "./cartItem.module.scss"

export const CartItem = ({ title, img, price }) => {
	return (
		<li className={s.item}><img className={s.img}
			src={img}
			alt={title} />
			<h4 className={s.itemTitle}>{title}</h4>
			<div className={s.counter}><button
				className={s.counterBtn}>-</button><input
					className={s.counterInput} type="number" max="99" min="0"
					value="1" /><button className="cart__counter-btn">+</button></div>
			<p className={s.price}>{price}&nbsp;₽</p>
		</li>
	)
}
