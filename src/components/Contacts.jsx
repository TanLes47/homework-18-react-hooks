import "./Contacts.css";
import Contact from "../Contact/Contact";
import { useState, useEffect } from "react";

const contacts = [
	{
		firstName: "Барней",
		lastName: "Стинсовський",
		phone: "+380956319521",
		gender: "male",
	},
	{
		firstName: "Робін",
		lastName: "Щербатська",
		phone: "+380931460123",
		gender: "female",
	},
	{
		firstName: "Анонімний",
		lastName: "Анонімус",
		phone: "+380666666666",
		gender: "agender",
	},
	{
		firstName: "Лілія",
		lastName: "Олдровна",
		phone: "+380504691254",
		gender: "female",
	},
	{
		firstName: "Маршен",
		lastName: "Еріксонян",
		phone: "+380739432123",
		gender: "male",
	},
	{
		firstName: "Теодор",
		lastName: "Мотсбес",
		phone: "+380956319521",
		gender: "male",
	},
];

const checkBoxesDefaulState = [
	{
		id: "male",
		checked: true,
	},
	{
		id: "female",
		checked: true,
	},
	{
		id: "agender",
		checked: true,
	},
];

function Contacts() {
	const [checkBoxes, setCheckboxes] = useState(checkBoxesDefaulState);
	const [contactsArray, setContacts] = useState(contacts);
	const [search, setSearch] = useState("");

	function handleSearchChange(e) {
		setSearch(e.target.value);
	}

	function handleCheckBoxChange(e) {
		const checkboxChecked = e.target.checked;
		const checkBoxId = e.target.id;
		const updatedCheckBoxes = checkBoxes.map((checkBox) => {
			const updatedCheckBox = { ...checkBox, checked: checkboxChecked };
			return checkBox.id === checkBoxId ? updatedCheckBox : checkBox;
		});
		setCheckboxes(updatedCheckBoxes);
	}

	useEffect(() => {
		const checkBoxes = document.querySelectorAll(".checkbox");
		checkBoxes.forEach((checkBox) => {
			checkBox.checked = true;
		});
	}, []);

	useEffect(() => {
		const contactsFiltered = contacts.filter((contact) => {
			const isFilteredFromSearch = Object.values(contact).some((field) =>
				field.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			);
			const isChecked = checkBoxes.filter((checkBox) => {
				return checkBox.id === contact.gender;
			})[0].checked;
			return isFilteredFromSearch && isChecked;
		});
		setContacts(contactsFiltered);
	}, [search, checkBoxes]);

	return (
		<div className="screen">
			<div className="screen__head">
				<div className="screen__name">
					<p>Контакти</p>
					<div className="screen__icon">
						<svg className="main-icon" viewBox="0 0 24 24">
							<path d="M19 3h-1v-2h-2v2h-8v-2h-2v2h-1c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12h-12v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" />
							<path d="M0 0h24v24h-24z" fill="none" />
						</svg>
					</div>
				</div>
				<div className="container">
					<div className="filter">
						<div className="checkbox__row">
							<div className="checkbox-block">
								<label>
									<input
										className="checkbox"
										type="checkbox"
										id="male"
										onChange={handleCheckBoxChange}
									/>
									<span className="custom-checkbox">Чол</span>
								</label>
							</div>
							<div className="checkbox-block">
								<label>
									<input
										className="checkbox"
										type="checkbox"
										id="female"
										onChange={handleCheckBoxChange}
									/>
									<span className="custom-checkbox">Жін</span>
								</label>
							</div>
							<div className="checkbox-block">
								<label>
									<input
										className="checkbox"
										type="checkbox"
										id="agender"
										onChange={handleCheckBoxChange}
									/>
									<span className="custom-checkbox">Не визначено</span>
								</label>
							</div>
						</div>
						<div className="search">
							<input
								type="text"
								placeholder="Пошук"
								onChange={handleSearchChange}
								value={search}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="screen__body">
				{contactsArray.map((contact, index) => {
					return <Contact {...contact} key={index} />;
				})}
			</div>
		</div>
	);
}

export default Contacts;
