import classNames from "classnames";
import { Choices } from "../Choices/Choices";
import f from "./filter.module.scss";

export const Filter = () => {
	return (
		<section className={f.filter}>
			<h2 className="visually-hidden"></h2>
			<div className={classNames("container")}>
				<form className={f.filterForm}>
					<fieldset className={f.filterGroup}>
						<input className={f.filterRadio} type="radio" name="type"
							value="bouquets" id="flower" defaultChecked />
						<label className={classNames(f.filterLabel, f.filterLabelFlower)}
							htmlFor="flower">Цветы</label>

						<input className={f.filterRadio} type="radio" name="type" value="toys" id="toys" />
						<label className={classNames(f.filterLabel, f.filterLabelToys)}
							htmlFor="toys">Игрушки</label>

						<input className={f.filterRadio} type="radio" name="type" value="postcards" id="postcard" />
						<label className={classNames(f.filterLabel, f.filterLabelPostcard)}
							htmlFor="postcard">Открытки</label>
					</fieldset>

					<fieldset className={classNames(f.filterGroup, f.filterGroupChoices)}>
						<Choices buttonLabel="Цена">
							<fieldset className={f.filterPrice}>
								<input className={f.filterInputPrice} type="text" name="minPrice"
									placeholder="от" />
								<input className={f.filterInputPrice} type="text" name="maxPrice"
									placeholder="до" />
							</fieldset>
						</Choices>

						<Choices buttonLabel="Тип товара">
							<ul>
								<li className={f.filterTypeItem}>
									<button className={f.filterTypeButton}
										type="button">Монобукеты</button>
								</li>
								<li className={f.filterTypeItem}>
									<button className={f.filterTypeButton} type="button">Авторские
										букеты</button>
								</li>
								<li className={f.filterTypeItem}>
									<button className={f.filterTypeButton} type="button">Цветы в
										коробке</button>
								</li>
								<li className={f.filterTypeItem}>
									<button className={f.filterTypeButton} type="button">Цветы в
										корзине</button>
								</li>
								<li className={f.filterTypeItem}>
									<button className={f.filterTypeButton} type="button">Букеты из
										сухоцветов</button>
								</li>
							</ul>
						</Choices>
					</fieldset>
				</form>
			</div>
		</section>
	)
}

