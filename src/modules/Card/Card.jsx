import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import s from "./card.module.scss";

export const Card = ({ className, id, img, title, dateDelivery, price }) => {
	const dispatch = useDispatch();

	const handlerAddToCart = () => {
		dispatch(addItemToCart({ id, img, title, dateDelivery, price }))
	}
	return (
		<article className={`${className} ${s.card}`}>
			<img className={s.cardImage}
				src={img}
				alt={title} />
			<div className={s.cardContent}>
				<h3 className={s.cardTitle}>{title}</h3>
				<div className={s.cardFooter}>
					<p className={s.cardDateDelivery}>{dateDelivery}</p>
					<button
						className={s.cardButton} onClick={handlerAddToCart}>{price}&nbsp;₽</button>
				</div>
			</div>
		</article>
	)
}

