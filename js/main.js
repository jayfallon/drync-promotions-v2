// get all promotions if the exist otherwise an empty array
var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
console.log(oldPromotions);

// le dtatepicker
$('[data-toggle="datepicker"]').datepicker({
    format: 'm/d/yy',
    autoHide: true,
    zIndex: 2048,
});

// populate selects on type filter change
filType = document.getElementById('filType');
filType.addEventListener('change', function(){
	filTypeOption = this.value;
	if (filTypeOption) {
		clearSelect(selectName);
		selectElem.map(writeToSelect);
		style.disabled = false;
		region.disabled = false;
	}
	if (filTypeOption == 'extras' || !filTypeOption) {
		clearSelect(selectName);
		option = document.createElement('option');
		option.setAttribute('value', '');
		optionTx = document.createTextNode('Choose Style');
		option.appendChild(optionTx);
		style.appendChild(option);
		option = document.createElement('option');
		option.setAttribute('value', '');
		optionTx = document.createTextNode('Choose Region');
		option.appendChild(optionTx);
		region.appendChild(option);
		style.disabled = true;
		region.disabled = true;
	}
});
