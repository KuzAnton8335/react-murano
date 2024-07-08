import classNames from "classnames";
import s from "./choices.module.scss";

export const Choices = ({ children, buttonLabel, OpenChoice, onToggle }) => {

	return (
		<div className={classNames(s.filterChoices, s.choices)}>
			{/* вызываем открытия окна при попомощи кнопки  onClick={handleOpen}  */}
			<button className={classNames(s.filterSelect)}
				type="button" onClick={onToggle}>{buttonLabel}</button>
			{OpenChoice && <div className={classNames(s.choicesBox, s.filterChoicesBox)}>{children}
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
