var selectElem = [
	{'select': 'style','type': 'wine', 'value': '', 'name': 'Choose Style'},
	{'select': 'style','type': 'wine', 'value': 'red', 'name': 'Red'},
	{'select': 'style','type': 'wine','value': 'white', 'name': 'White'},
	{'select': 'style', 'type': 'wine','value': 'rose', 'name': 'Rosé'},
	{'select': 'style', 'type': 'wine','value': 'sparkling', 'name': 'Sparkling'},
	{'select': 'style', 'type': 'beer','value': '', 'name': 'Choose Style'},
	{'select': 'style', 'type': 'beer','value': 'ale', 'name': 'Ale'},
	{'select': 'style', 'type': 'beer','value': 'lager', 'name': 'Lager'},
	{'select': 'style', 'type': 'beer','value': 'pilsner', 'name': 'Pilsner'},
	{'select': 'style', 'type': 'beer','value': 'stout', 'name': 'Stout'},
	{'select': 'style', 'type': 'spirits','value': '', 'name': 'Choose Style'},
	{'select': 'style', 'type': 'spirits','value': 'gin', 'name': 'Gin'},
	{'select': 'style', 'type': 'spirits','value': 'rum', 'name': 'Rum'},
	{'select': 'style', 'type': 'spirits','value': 'vodka', 'name': 'Vodka'},
	{'select': 'style', 'type': 'spirits','value': 'whiskey', 'name': 'Whiskey'},
	{'select': 'region', 'type': 'wine','value': '', 'name': 'Choose Region'},
	{'select': 'region', 'type': 'wine','value': 'australia', 'name': 'Australia', 'denomyn': 'Australian'},
	{'select': 'region', 'type': 'wine','value': 'argentina', 'name': 'Argentina', 'denomyn': 'Argentinian'},
	{'select': 'region', 'type': 'wine','value': 'france', 'name': 'France', 'denomyn': 'French'},
	{'select': 'region', 'type': 'wine','value': 'italy', 'name': 'Italy', 'denomyn': 'Italian'},
	{'select': 'region', 'type': 'wine','value': 'spain', 'name': 'Spain', 'denomyn': 'Spanish'},
	{'select': 'region', 'type': 'beer','value': '', 'name': 'Choose Region'},
	{'select': 'region', 'type': 'beer','value': 'america', 'name': 'US Domestic', 'denomyn': 'American'},
	{'select': 'region', 'type': 'beer','value': 'belgium', 'name': 'Belgium', 'denomyn': 'Belgian'},
	{'select': 'region', 'type': 'beer','value': 'germany', 'name': 'Germany', 'denomyn': 'German'},
	{'select': 'region', 'type': 'beer','value': 'mexico', 'name': 'Mexico', 'denomyn': 'Mexican'},
	{'select': 'region', 'type': 'beer','value': 'thailand', 'name': 'Thailand', 'denomyn': 'Thai'},
	{'select': 'region', 'type': 'spirits','value': '', 'name': 'Choose Region'},
	{'select': 'region', 'type': 'spirits','value': 'england', 'name': 'England', 'denomyn': 'English'},
	{'select': 'region', 'type': 'spirits','value': 'jamaica', 'name': 'Jamaica', 'denomyn': 'Jamaican'},
	{'select': 'region', 'type': 'spirits','value': 'ireland', 'name': 'Ireland', 'denomyn': 'Irish'},
	{'select': 'region', 'type': 'spirits','value': 'scotland', 'name': 'Scotland', 'denomyn': 'Scottish'},
	{'select': 'region', 'type': 'spirits','value': 'wales', 'name': 'Wales', 'denomyn': 'Welsh'},
];

var selectName = ['filStyle', 'filRegion'];

var style = document.getElementById('filStyle');
var region = document.getElementById('filRegion');

function writeToSelect(item, index) {

	function writeOption() {
		option = document.createElement('option');
		optValue = item.value;
		option.setAttribute('value', optValue);
		if (item.denomyn) {
			option.setAttribute('data-denomyn', item.denomyn);
		}
		optName = item.name;
		optionTx = document.createTextNode(optName);
		option.appendChild(optionTx);
	}

	if (filTypeOption == 'wine') {
		if (item.select == 'style' && item.type == 'wine') {
			writeOption();
			style.appendChild(option);
		}
		if (item.select == 'region' && item.type == 'wine') {
			writeOption();
			region.appendChild(option);
		}
	}
	if (filTypeOption == 'beer') {
		if (item.select == 'style' && item.type == 'beer') {
			writeOption();
			style.appendChild(option);
		}
		if (item.select == 'region' && item.type == 'beer') {
			writeOption();
			region.appendChild(option);
		}
	}
	if (filTypeOption == 'spirits') {
		if (item.select == 'style' && item.type == 'spirits') {
			writeOption();
			style.appendChild(option);
		}
		if (item.select == 'region' && item.type == 'spirits') {
			writeOption();
			region.appendChild(option);
		}
	}
}

function clearSelect(array) {
	for (e in array) {
		s = document.getElementById(array[e]);
		while(s.hasChildNodes()) {
			s.removeChild(s.firstChild);
		}
	}
}
