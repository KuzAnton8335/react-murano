import classNames from "classnames";
import { useState } from "react";
import s from "./choices.module.scss";

export const Choices = ({ children, buttonLabel }) => {
	// задаем состояние при помощи хука useState
	const [isOpen, setIsOpen] = useState(false);
	// изменяем состоояние при помощи функции handleOpen
	const handleOpen = () => {
		setIsOpen((oldIsOpen) => !oldIsOpen);
	}

	return (
		<div className={classNames(s.filterChoices, s.choices)}>
			{/* вызываем открытия окна при попомощи кнопки  onClick={handleOpen}  */}
			<button className={classNames(s.filterSelect)}
				type="button" onClick={handleOpen}>{buttonLabel}</button>
			{isOpen && <div className={classNames(s.choicesBox, s.filterChoicesBox)}>{children}
			</div>}
			{/* <fieldset className={f.filterPrice}>
					<input className={f.filterInputPrice} type="text" name="minPrice"
						placeholder="от" />
					<input className={f.filterInputPrice} type="text" name="maxPrice"
						placeholder="до" />
				</fieldset> */}
		</div>
	)
}
