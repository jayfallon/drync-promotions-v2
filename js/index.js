(function(){
	var oldPromotions = JSON.parse(localStorage.getItem('PromotionsArray')) || [];
	console.log(oldPromotions);

	function fetchData() {
	  //seed some data if empty
	  if (oldPromotions.length == 0) {
	    oldPromotions = [
	      {"prNumber":"itdz5rrgcxoxo","prName":"All Argentine Reds","prCode":"ARG18","prStatus":"active","prDiscAmount":"10","prDiscType":"percent", "prDiscCount": "1","prDiscMin":"100","prSaleItems":"true","prStart":"12/26/17","prStop":"12/27/17","prMinPurch":"100","prMaxPurch":"1000", "filPrice": "low", "filType":"wine","filStyle":"red","filRegion":"argentina","prMessage":"Save 10% on Argentinian red wine from 12/28/17 to 1/4/18 when you spend $100 or more."},
	      {"prNumber":"itdz5rrgctest","prName":"Spanish Rioja Special","prCode":"RIO17","prStatus":"inactive","prDiscAmount":"10","prDiscType":"percent", "prDiscCount": "1","prDiscMin":"100","prSaleItems":"true","prStart":"12/26/17","prStop":"12/27/17","prMinPurch":"100","prMaxPurch":"1000", "filPrice": "low", "filType":"wine","filStyle":"red","filRegion":"spain","prMessage":"Save 12% on Spanish red wine from 12/28/17 to 1/4/18 when you spend $25 or more."}
	      ];
	    localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
	  }
	}

	fetchData();

	var indexGrid = document.getElementById('index-grid');

	function writeDataRows(item, index) {
		allPromotions = document.createElement('div');
		allPromotions.setAttribute('class', 'index-grid-data');
		allPromotions.setAttribute('data-toggle', item.prNumber);
		element = document.createElement('div');
		element.setAttribute('class', 'data-cell name');
		elementA = document.createElement('a');
		elementA.setAttribute('href', 'view.html?' + item.prNumber);
		elementTx = document.createTextNode(item.prName);
		elementA.appendChild(elementTx);
		element.appendChild(elementA);
		allPromotions.appendChild(element);
		element = document.createElement('div');
		element.setAttribute('class', 'data-cell code');
		elementTx = document.createTextNode(item.prCode);
		element.appendChild(elementTx);
		allPromotions.appendChild(element);
		element = document.createElement('div');
		element.setAttribute('class', 'data-cell discount');
		elementTx = document.createTextNode(item.prDiscAmount);
		element.appendChild(elementTx);
		allPromotions.appendChild(element);
		element = document.createElement('div');
		element.setAttribute('class', 'data-cell period');
		elementTx = document.createTextNode(item.prStart + ' - ' + item.prStop);
		element.appendChild(elementTx);
		allPromotions.appendChild(element);
		element = document.createElement('div');
		element.setAttribute('class', 'data-cell minimum');
		elementTx = document.createTextNode(item.prDiscMin);
		element.appendChild(elementTx);
		allPromotions.appendChild(element);
		element = document.createElement('div');
		element.setAttribute('class', 'data-cell status');
		elementSp = document.createElement('span');
		elementSp.setAttribute('class', 'prStatus-switch');
		elementSp.setAttribute('data-switch', index);
		elementTx = document.createTextNode(item.prStatus);
		elementSp.appendChild(elementTx);
		element.appendChild(elementSp);
		allPromotions.appendChild(element);
		element = document.createElement('div');
		element.setAttribute('class', 'data-cell messageCell');
		elementInner = document.createElement('div');
		elementInner.setAttribute('class', 'prMessage');
		elementTx = document.createTextNode(item.prMessage);
		elementInner.appendChild(elementTx);
		element.appendChild(elementInner);
		allPromotions.appendChild(element);
		indexGrid.appendChild(allPromotions);

		setStatus();
	}

	var currentElem = '';
	if (oldPromotions != null) {
		oldPromotions.map(writeDataRows);
	}

	function setStatus() {
	  var statusToggle = document.getElementsByClassName("prStatus-switch");
	  for (var i = 0; i < statusToggle.length; i++) {
	      statusToggle[i].addEventListener('click', statusChange);
	  }
	}

	function emptyDisplay() {
		// var container = document.getElementById("container");
	  var elements = indexGrid.getElementsByClassName("index-grid-data");

	  while (elements[0]) {
	      elements[0].parentNode.removeChild(elements[0]);
	  }
	}

	function statusChange() {
	  var status = this.getAttribute("data-switch");
	  this.setAttribute('class', 'fading');
	  if (oldPromotions[status].prStatus == "active") {
	    oldPromotions[status].prStatus = "inactive";
	  } else if (oldPromotions[status].prStatus == "inactive") {
	    oldPromotions[status].prStatus = "active";
	  }
	  this.innerHTML = oldPromotions[status].prStatus;
	  localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
	  emptyDisplay();
	  oldPromotions.map(writeDataRows);
	}
})();
