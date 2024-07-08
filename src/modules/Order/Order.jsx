import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/orderSlice";
import s from "./order.module.scss";

export const Order = () => {
	// хук useDispath
	const dispatch = useDispatch();
	// условие для открытия модального окна
	const isOrder = false;
	// состояния модального окна при помощи хука useSelector (state) "react-redux"
	const isOpen = useSelector(state => state.order.isOpen);
	// функция для закрытия модального окна
	const handlerClose = ({ target }) => {
		// вставка s.order и s.orderClose через шаблонную строку
		if (target.matches(`.${s.order}`) || target.closest(`.${s.orderClose}`)) {
			dispatch(closeModal());
		}
	}
	// условие для закрытия модального окна
	if (!isOpen) return null;


	return (
		<div className={s.order} onClick={handlerClose}>
			<div className={s.orderWrapper} onClick={(e) => e.stopPropagation()}>
				{isOrder ?
					(<>
						<h2 className={s.orderTitle}>Заказ оформлен!</h2>
						<p className={s.orderId}>Ваш номер заказа:
							971f365a-caa1-4cdb-9446-bad2eff047e1</p>
					</>)
					:
					(<>
						<h2 className={s.orderTitle}>Оформить заказ</h2>
						<form className={s.orderForm} id="order">
							<fieldset className={s.orderFieldset}>
								<legend className={s.orderLegend}>Данные заказчика</legend>
								<div className={s.orderInputGroup}><input className={s.orderInput}
									type="text" name="name-buyer" placeholder="Имя" /><input
										className={s.orderInput} type="text" name="phone-buyer"
										placeholder="Телефон" /></div>
							</fieldset>
							<fieldset className={s.orderFieldset}>
								<legend className={s.orderLegend}>Данные получателя</legend>
								<div className={s.orderInputGroup}><input className={s.orderInput}
									type="text" name="name-recipient" placeholder="Имя" /><input
										className={s.orderInput} type="text" name="phone-recipient"
										placeholder="Телефон" /></div>
							</fieldset>
							<fieldset className={s.orderFieldset}>
								<legend className={s.orderLegend}>Адрес</legend>
								<div className={s.orderInputGroup}><input className={s.orderInput}
									type="text" name="street" placeholder="Улица" /><input
										className={classNames(s.orderInput, s.orderInputMin)} type="text" name="house"
										placeholder="Дом" /><input className={classNames(s.orderInput, s.orderInputMin)}
											type="text" name="apartment" placeholder="Квартира" /></div>
							</fieldset>
							<fieldset className={s.orderFieldset}>
								<div className={s.orderPayment}><label className={s.orderLabelRadio}><input
									className={s.orderRadio} type="radio" name="payment-online"
									value="true" defaultChecked />Оплата онлайн</label></div>
								<div className={s.orderDelivery}><label htmlFor="delivery">Доставка
									01.07</label><input type="hidden" name="delivery-date"
										value="01.07" />
									<div className={s.orderSelectWrapper}>
										<select className={s.orderSelect}
											name="delivery-time" id="delivery">
											<option value="9-12">с 9:00 до 12:00</option>
											<option value="12-15">с 12:00 до 15:00</option>
											<option value="15-18">с 15:00 до 18:00</option>
											<option value="18-21">с 18:00 до 21:00</option>
										</select></div>
								</div>
							</fieldset>
						</form>
						<div className={s.orderFooter}>
							<p className="order__total">92100&nbsp;₽</p><button className={s.orderButton}
								type="submit" form="order">Заказать</button>
						</div>

					</>)
				}
			</div>
			<button class={s.orderClose} type="button">×</button>
		</div >
	)


}
