"use strict";

const container = document.querySelector(".container");
const select = document.querySelector(".select");
const carsList = document.querySelector(".carsList");

const check1 = document.querySelector(".check1");
const check2 = document.querySelector(".check2");
const check3 = document.querySelector(".check3");
const check4 = document.querySelector(".check4");
const check5 = document.querySelector(".check5");

const getInfo = () => {
	let cars = {};
	let groups = [];

	fetch("carsJSON.json")
	.then((res) => {
		return res.json();
	})
	.then((res) => {
		cars = res["cars"];

		let boolean = true;
		for (let group in cars) {
			if (boolean) {
				deleteCar();
				boolean = false;
			}
			createCar(cars[group]["Company1"]);
			createCar(cars[group]["Company2"]);

			const option = document.createElement("OPTION");
			option.textContent = group;
			select.appendChild(option);

			groups.push(cars[group]);
		}
		boolean = true;
	})

	select.addEventListener("change", e => {
		check1.checked = false;
		check2.checked = false;
		check3.checked = false;
		check4.checked = false;
		check5.checked = false;

		const group = select.options[select.selectedIndex].text;
		console.log(cars);
		if (group === "All") {
			let boolean = true;
			for (let gr in cars) {
				if (boolean) {
					deleteCar();
					groups = [];
					boolean = false;
				}
				createCar(cars[gr]["Company1"]);
				createCar(cars[gr]["Company2"]);

				groups.push(cars[gr]);
			}
			boolean = true;
		} else {
			deleteCar();
			groups = [];
			createCar(cars[group]["Company1"]);
			createCar(cars[group]["Company2"]);

			groups.push(cars[group]);
		}
	})

	//Manual Transmission
	check1.addEventListener("click", () => {
		check2.checked = false;
		check3.checked = false;
		check4.checked = false;
		check5.checked = false;

		console.log(groups);
		const company1 = groups.map(g => g["Company1"]);
		const company2 = groups.map(g => g["Company2"]);
		const filt1 = company1.filter(g => g["Features2"]["transmition"] === "Manual");
		const filt2 = company2.filter(g => g["Features2"]["transmition"] === "Manual");
		console.log(company1);
		console.log(company2);
		console.log(filt1);
		console.log(filt2);

		deleteCar();

		for (let i = 0; i < filt1.length; i++) {
			createCar(filt1[i]);	
		}

		for (let i = 0; i < filt2.length; i++) {
			createCar(filt2[i]);	
		}	
	})
	//5 seats
	check2.addEventListener("click", () => {
		check1.checked = false;
		check3.checked = false;
		check4.checked = false;
		check5.checked = false;

		console.log(groups);
		const company1 = groups.map(g => g["Company1"]);
		const company2 = groups.map(g => g["Company2"]);
		const filt1 = company1.filter(g => parseInt(g["Features2"]["seats"],10) === 5);
		const filt2 = company2.filter(g => parseInt(g["Features2"]["seats"],10) === 5);
		console.log(company1);
		console.log(company2);
		console.log(filt1);
		console.log(filt2);

		deleteCar();

		for (let i = 0; i < filt1.length; i++) {
			createCar(filt1[i]);	
		}

		for (let i = 0; i < filt2.length; i++) {
			createCar(filt2[i]);	
		}
	})
	//Convertibles
	check3.addEventListener("click", () => {
		check1.checked = false;
		check2.checked = false;
		check4.checked = false;
		check5.checked = false;

		console.log(groups);
		const company1 = groups.map(g => g["Company1"]);
		const company2 = groups.map(g => g["Company2"]);
		const filt1 = company1.filter(g => g["Features2"]["category"] === "Convertible");
		const filt2 = company2.filter(g => g["Features2"]["category"] === "Convertible");
		console.log(company1);
		console.log(company2);
		console.log(filt1);
		console.log(filt2);

		deleteCar();

		for (let i = 0; i < filt1.length; i++) {
			createCar(filt1[i]);	
		}

		for (let i = 0; i < filt2.length; i++) {
			createCar(filt2[i]);	
		}
	})
	//Automatic transmission
	check4.addEventListener("click", () => {
		check1.checked = false;
		check2.checked = false;
		check3.checked = false;
		check5.checked = false;

		console.log(groups);
		const company1 = groups.map(g => g["Company1"]);
		const company2 = groups.map(g => g["Company2"]);
		const filt1 = company1.filter(g => g["Features2"]["transmition"] === "Automatic");
		const filt2 = company2.filter(g => g["Features2"]["transmition"] === "Automatic");
		console.log(company1);
		console.log(company2);
		console.log(filt1);
		console.log(filt2);

		deleteCar();

		for (let i = 0; i < filt1.length; i++) {
			createCar(filt1[i]);	
		}

		for (let i = 0; i < filt2.length; i++) {
			createCar(filt2[i]);	
		}
	})
	//7 seats or more
	check5.addEventListener("click", () => {
		check1.checked = false;
		check2.checked = false;
		check3.checked = false;
		check4.checked = false;

		console.log(groups);
		const company1 = groups.map(g => g["Company1"]);
		const company2 = groups.map(g => g["Company2"]);
		const filt1 = company1.filter(g => parseInt(g["Features2"]["seats"],10) >= 7);
		const filt2 = company2.filter(g => parseInt(g["Features2"]["seats"],10) >= 7);
		console.log(company1);
		console.log(company2);
		console.log(filt1);
		console.log(filt2);

		deleteCar();

		for (let i = 0; i < filt1.length; i++) {
			createCar(filt1[i]);	
		}

		for (let i = 0; i < filt2.length; i++) {
			createCar(filt2[i]);	
		}
	})
}

const createCar = (company) => {
	const carItem = document.createElement("DIV");
	carItem.classList.add("carItem");
//--------------------------------------------------------
	const carImg = document.createElement("DIV");
	const img = document.createElement("IMG");

	img.src = `${company["PictureURL"]}`;

	carImg.classList.add("carImg");

	carImg.appendChild(img);
//-------------------------------------------------------
	const carDetails = document.createElement("DIV");
	
	const details = document.createElement("DIV");
	const category = document.createElement("H2");
	const group = document.createElement("H5");
	const name = document.createElement("H5");
	const button = document.createElement("BUTTON");
	const imgButton = document.createElement("IMG");
	const textButton = document.createElement("P");

	category.textContent = `${company["Features2"]["category"]}`;
	group.textContent = `GROUP ${company["VehGroup"]} (${company["Code"]})`;
	name.textContent = `${company["Name"]}`.toUpperCase();
	imgButton.src = "okey.png";
	textButton.textContent = "Book now!";

	carDetails.classList.add("carDetails");

	details.appendChild(category);
	details.appendChild(group);
	details.appendChild(name);
	button.appendChild(imgButton);
	button.appendChild(textButton);

	carDetails.appendChild(details);
	carDetails.appendChild(button);
//------------------------------------------------------
	const carCharact = document.createElement("DIV");
	
	const characteristics = document.createElement("H4");
	const listCharact = document.createElement("UL");
	const seats = document.createElement("LI");
	const lSuitcase = document.createElement("LI");
	const sSuitcase = document.createElement("LI");
	const doors = document.createElement("LI");
	const transmission = document.createElement("LI");
	const air = document.createElement("LI");
	const imgSeats = document.createElement("IMG");
	const imgLSuitcase = document.createElement("IMG");
	const imgSSuitcase = document.createElement("IMG");
	const imgDoors = document.createElement("IMG");
	const imgTransmission = document.createElement("IMG");
	const imgAir = document.createElement("IMG");
	const textSeats = document.createElement("P");
	const textLSuitcase = document.createElement("P");
	const textSSuitcase = document.createElement("P");
	const textDoors = document.createElement("P");
	const textTransmission = document.createElement("P");
	const textAir = document.createElement("P");

	characteristics.textContent = "CHARACTERISTICS";
	textSeats.textContent = `${company["Features2"]["seats"]} seats`;
	textLSuitcase.textContent = `${company["Features2"]["largeSuitcase"]} large suitcase`;
	textSSuitcase.textContent = `${company["Features2"]["smallSuitcase"]} small suitcase`;
	textDoors.textContent = `${company["Features2"]["doors"]} doors`;
	textTransmission.textContent = `${company["Features2"]["transmition"]} transmission`;
	textAir.textContent = `${company["Features2"]["air"]}`;
	imgSeats.src = "assets/images/seats.svg";
	imgLSuitcase.src = "assets/images/luggage.svg";
	imgSSuitcase.src = "assets/images/bag.svg";
	imgDoors.src = "assets/images/door.svg";
	imgTransmission.src = "assets/images/transmision.svg";
	imgAir.src = "assets/images/air-conditioning.svg";

	carCharact.classList.add("carCharact");

	seats.appendChild(imgSeats);
	lSuitcase.appendChild(imgLSuitcase);
	sSuitcase.appendChild(imgSSuitcase);
	doors.appendChild(imgDoors);
	transmission.appendChild(imgTransmission);
	air.appendChild(imgAir);

	seats.appendChild(textSeats);
	lSuitcase.appendChild(textLSuitcase);
	sSuitcase.appendChild(textSSuitcase);
	doors.appendChild(textDoors);
	transmission.appendChild(textTransmission);
	air.appendChild(textAir);

	listCharact.appendChild(seats);
	listCharact.appendChild(lSuitcase);
	listCharact.appendChild(sSuitcase);
	listCharact.appendChild(doors);
	listCharact.appendChild(transmission);
	listCharact.appendChild(air);

	carCharact.appendChild(characteristics);
	carCharact.appendChild(listCharact);
//------------------------------------------------------
	const carRates = document.createElement("DIV");
	carRates.classList.add("carRates");

	const availRates = document.createElement("H4");
	availRates.textContent = "AVAILABLE RATES";
	const listRates = document.createElement("UL");

	let rates = company["Rates"];
	let arrayRates = [];
	//let arrayRateInclusions = [];
	for (let rate in rates) {
		let name = rates[`${rate}`]["RateData"]["name"];
		arrayRates.push(`${rate} - ${name}`);

		//arrayRateInclusions = rates[`${rate}`]["RateData"]["inclusions"];
	}
	
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < arrayRates.length; i++) {
		const rate = document.createElement("LI");
		const labRate = document.createElement("LABEL");
		const inpRate = document.createElement("INPUT");
		const textRate = document.createElement("P");
		const pRate = document.createElement("P");
		const divRate = document.createElement("DIV");
		const typeCurrency = document.createElement("P");
		const valueCurrency = document.createElement("P");

		textRate.textContent = `${arrayRates[i]}`;
		pRate.textContent = "Rate Inclusions";
		typeCurrency.textContent = "USD";
		valueCurrency.textContent = "725";
		inpRate.type = "radio";
		inpRate.name = "tipo";

		pRate.classList.add("pRate");

		labRate.appendChild(inpRate);
		labRate.appendChild(textRate);
		divRate.appendChild(typeCurrency);
		divRate.appendChild(valueCurrency);

		rate.appendChild(labRate);
		rate.appendChild(pRate);
		rate.appendChild(divRate);

		fragment.appendChild(rate);

		pRate.addEventListener("click", () => {
			modalRate(arrayRates[i]);
		})
	}

	listRates.appendChild(fragment);

	carRates.appendChild(availRates);
	carRates.appendChild(listRates);
//------------------------------------------------------
	carItem.appendChild(carImg)	;
	carItem.appendChild(carDetails);
	carItem.appendChild(carCharact);
	carItem.appendChild(carRates);

	carsList.appendChild(carItem);
}

const deleteCar = () => {
	let carsArray = document.querySelectorAll(".carsList > .carItem");
	if (carsArray.length !== 0) {
		for (let i = 0; i < carsArray.length; i++) {
			carsList.removeChild(carsArray[i]);
		}
	} else {
		console.log("Nothing");
	}
}

const modalRate = (arrayRates) => {
	if (document.querySelectorAll(".container > .modalRate").length !== 0) {
		const oldModalRate = document.querySelector(".modalRate");
		container.removeChild(oldModalRate);
	}
	const modalRate = document.createElement("DIV");
	const boxRate = document.createElement("DIV");
	const titRate = document.createElement("H3");
	const subtitRate = document.createElement("H3");
	const incList = document.createElement("UL");

	const quit = document.createElement("DIV");
	const imgQuit = document.createElement("IMG");

	titRate.textContent = "Rate Information";
	subtitRate.textContent = `${arrayRates}`;

	modalRate.classList.add("modalRate");
	boxRate.classList.add("boxRate");
	quit.classList.add("quit");

	imgQuit.setAttribute("src", "equis.png");

	/*const fragment = document.createDocumentFragment();
	for (let i = 0; i < arrayRateInclusions.length; i++) {
		const incItem = document.createElement("LI");
		const imgItem = document.createElement("IMG");
		const textItem = document.createElement("P");

		textItem.textContent = `${arrayRateInclusions[i]}`;

		incItem.appendChild(imgItem);
		incItem.appendChild(textItem);

		fragment.appendChild(incItem);
	}

	incList.appendChild(fragment);*/

	quit.appendChild(imgQuit);
	boxRate.appendChild(quit);
	boxRate.appendChild(titRate);
	boxRate.appendChild(subtitRate);
	//boxRate.appendChild(incList);

	modalRate.appendChild(boxRate);
	container.appendChild(modalRate);

	document.body.style.overflowY = "hidden";

	quit.addEventListener("click", () => {
		container.removeChild(modalRate);
		document.body.style.overflowY = "visible";
	})	
}

getInfo();

