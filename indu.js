function convert() {
	var inputValue = document.getElementById("inputValue").value;
	var selectUnit = document.getElementById("selectUnit").value;
	var selectConversionUnit = document.getElementById("selectConversionUnit").value;
	var meters = 0;
	switch(selectUnit) {
		case "m":
			meters = inputValue;
			break;
		case "km":
			meters = inputValue * 1000;
			break;
		case "cm":
			meters = inputValue / 100;
			break;
		case "mm":
			meters = inputValue / 1000;
			break;
		case "in":
			meters = inputValue * 0.0254;
			break;
		case "ft":
			meters = inputValue * 0.3048;
			break;
		case "yd":
			meters = inputValue * 0.9144;
			break;
		case "mi":
			meters = inputValue * 1609.34;
			break;
	}
	var result = 0;
	switch(selectConversionUnit) {
		case "m":
			result = meters;
			break;
		case "km":
			result = meters / 1000;
			break;
		case "cm":
			result = meters * 100;
			break;
		case "mm":
			result = meters * 1000;
			break;
		case "in":
			result = meters / 0.0254;
			break;
		case "ft":
			result = meters / 0.3048;
			break;
		case "yd":
			result = meters / 0.9144;
			break;
		case "mi":
			result = meters / 1609.34;
			break;
	}
	document.getElementById("result").innerHTML = inputValue + " " + selectUnit + " = " + result.toFixed(2) + " " + selectConversionUnit;
}
