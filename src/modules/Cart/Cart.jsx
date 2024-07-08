import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { goodsArray } from "../../../goodsArray";
import { toggleCart } from "../../redux/cartSlice";
import { openModal } from "../../redux/orderSlice";
import { CartItem } from "../Cartitem/CartItem";
import s from "./cart.module.scss";


export const Cart = () => {
	// селектор вывода окна корзины
	const isOpen = useSelector((state) => state.cart.isOpen)
	// инициализация хука useDispatch через переменную  dispatch
	const dispatch = useDispatch();
	// функция закрытия модального окна
	const handlerCartClose = () => {
		dispatch(toggleCart())
	}
	// функция откыртия модального окна
	const handlerOpenOrder = () => {
		dispatch(openModal());
	}

	// вызов окна корзины
	if (!isOpen) return null;
	// разметка фрагмента файла html в jsx
	return (
		<section className={classNames(s.cart, s.cartOpen)}>
			<div className={s.cartContainer}>
				<div className={s.cartHeader}>
					<h3 className={s.cartTitle}>Ваш заказ</h3>

					<button className="cart__close" onClick={handlerCartClose}>
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<rect x="5" y="5.70715" width="1" height="25"
								transform="rotate(-45 5 5.70715)" fill="#D17D2F" />
							<rect x="22.6777" y="5" width="1" height="25"
								transform="rotate(45 22.6777 5)" fill="#D17D2F" />
						</svg>
					</button>
				</div>
				<p className={s.cartDateDelivery}>сегодня в 14:00</p>
				<ul className={s.CartList}>
					{goodsArray.map((item) => (<CartItem key={item.id} {...item} />))}
				</ul>
				<div className={s.cartFooter}>
					<button className={s.cartOrderBtn} onClick={handlerOpenOrder}>Оформить</button>
					<p className="cart__price cart__price_total">0&nbsp;₽</p>
				</div>
			</div>
		</section>
	)
}

