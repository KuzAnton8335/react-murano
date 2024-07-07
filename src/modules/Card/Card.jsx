import s from "./card.module.scss"
import classNames from "classnames"

export const Card = ({ className, img, title, dateDelivery, price }) => {
	return (
		<article className={`${className} ${s.card}`}>
			<img className={s.cardImage}
				src={img}
				alt={title} />
			<div className={s.cardContent}>
				<h3 className={s.cardTitle}>{title}</h3>
				<div className={s.cardFooter}>
					<p className={s.cardDateDelivery}>{dateDelivery}</p><button
						className={s.cardButton}>{price}&nbsp;₽</button>
				</div>
			</div>
		</article>
	)
}

