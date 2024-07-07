import f from"./filter.module.scss";
import s from "./choices.module.scss";
import classNames from "classnames";

export const Filter = () => {
//     !todo:остановился на месте, теперь в фильтре
	return (
		<section className={f.filter}>
			<h2 className="visually-hidden"></h2>
			<div className={classNames("container")}>
				<form className={f.filterForm}>
					<fieldset className={f.filterGroup}>
						<input className={f.filterRadio} type="radio" name="type"
							value="bouquets" id="flower" defaultChecked />
						<label className={classNames (f.filterLabel,f.filterLabelFlower)}
							htmlFor="flower">Цветы</label>

						<input className={f.filterRadio} type="radio" name="type" value="toys" id="toys" />
						<label className={classNames(f.filterLabel,f.filterLabelToys)}
							htmlFor="toys">Игрушки</label>

						<input className={f.filterRadio} type="radio" name="type" value="postcards" id="postcard" />
						<label className={classNames(f.filterLabel,f.filterLabelPostcard)}
							htmlFor="postcard">Открытки</label>
					</fieldset>

					<fieldset className={classNames(f.filterGroup,f.filterGroupChoices)}>
						<div className={classNames(f.filterChoices,s.choices)}>
							<button className={classNames(f.filterSelect)}
								type="button">Цена</button>

							<div className={classNames(s.choicesBox,f.filterChoicesBox)}>
								<fieldset className={f.filterPrice}>
									<input className="filter__input-price" type="text" name="minPrice"
										placeholder="от" />
									<input className="filter__input-price" type="text" name="maxPrice"
										placeholder="до" />
								</fieldset>
							</div>
						</div>

						<div className="filter__choices filter__choices_type choices">
							<button className="filter__select choices__btn" type="button">Тип
								товара</button>

							<div
								className="choices__box filter__choices-box filter__choices-box_type">
								<ul className="filter__type-list">
									<li className="filter__type-item">
										<button className="filter__type-button"
											type="button">Монобукеты</button>
									</li>
									<li className="filter__type-item">
										<button className="filter__type-button" type="button">Авторские
											букеты</button>
									</li>
									<li className="filter__type-item">
										<button className="filter__type-button" type="button">Цветы в
											коробке</button>
									</li>
									<li className="filter__type-item">
										<button className="filter__type-button" type="button">Цветы в
											корзине</button>
									</li>
									<li className="filter__type-item">
										<button className="filter__type-button" type="button">Букеты из
											сухоцветов</button>
									</li>
								</ul>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</section>
	)
}

