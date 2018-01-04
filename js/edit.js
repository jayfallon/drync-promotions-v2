(function(){

	var urlParams = new URLSearchParams(window.location.search);

	var entries = urlParams.entries();
	for(pair of entries) {
	  var chisme = pair[0];
	}

	function writeDataToForm(dataObject) {
		var prName = document.getElementById("prName");
		var prCode = document.getElementById("prCode");
		var prStatus = document.getElementById("prStatus")
		var prDiscAmount = document.getElementById("prDiscAmount");
		var prDiscType = document.getElementById("prDiscType");
		var prDiscMin = document.getElementById("prDiscMin");
		var prDiscCount = document.getElementById("prDiscCount");
		var prSaleItems = document.getElementById("prSaleItems");
		var prStores = document.getElementById("prStores");
		var prStart = document.getElementById("prStart");
		var prStop = document.getElementById("prStop");
		var prMinPurch = document.getElementById("prMinPurch");
		var prMaxPurch = document.getElementById("prMaxPurch");
		var filType = document.getElementById("filType");
		var filStyle = document.getElementById("filStyle");
		var filRegion = document.getElementById("filRegion");
		var filPrice = document.getElementById("filPrice");
		var prMessage = document.getElementById("prMessage");

		prName.value = dataObject.prName;
		prCode.value = dataObject.prCode;
		prDiscAmount.value = dataObject.prDiscAmount;
		prDiscMin.value = dataObject.prDiscMin;
		prDiscCount.value = dataObject.prDiscCount;
		prDiscType.value = dataObject.prDiscType;
		prStart.value = dataObject.prStart;
		prStop.value = dataObject.prStop;
		prMinPurch.value = dataObject.prMinPurch;
		prMaxPurch.value = dataObject.prMaxPurch;
		filType.value = dataObject.filType;
		filStyle.value = dataObject.filStyle;
		filRegion.value = dataObject.filRegion;
		filPrice.value = dataObject.filPrice;
		prMessage.value = dataObject.prMessage;
	}

	function submitForm() {
	  currentElem.prName = prName.value;
	  currentElem.prCode = prCode.value;
	  currentElem.prDiscAmount = prDiscAmount.value;
	  currentElem.prDiscType = prDiscType.value;
	  currentElem.prDiscMin = prDiscMin.value;
	  currentElem.prDiscCount = prDiscCount.value;
	  currentElem.prSaleItems = prSaleItems;
	  currentElem.prStart = prStart.value;
	  currentElem.prStop = prStop.value;
	  currentElem.prMinPurch = prMinPurch.value;
	  currentElem.prMaxPurch = prMaxPurch.value;
	  currentElem.filType = filType.options[filType.selectedIndex].value;
	  if (currentElem.filType == "wine" || "beer" || "spirits") {
	    currentElem.filStyle = filStyle.options[filStyle.selectedIndex].value;
	    currentElem.filRegion = filRegion.options[filRegion.selectedIndex].value;
	  } else if (currentElem.filType == "extras" || null) {
	    currentElem.filStyle = '';
	    currentElem.filRegion = '';
	  }
	  currentElem.filPrice = filPrice.options[filPrice.selectedIndex].value;
	  currentElem.prMessage = document.getElementById("prMessage").value;

	  localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
	  location.assign("view.html?" + chisme);
	}

	var prSave = document.getElementById("prSave");
	prSave.addEventListener('click', function(){
		// submit to view page
		submitForm();
		// stop the form behavior
		return false;
	});

	var prDelete = document.getElementById('prDelete');
	prDelete.addEventListener('click', function(){
	    function findUrl(promo) {
	      return promo.prNumber === chisme;
	    }
	    oldPromotions.splice(oldPromotions.findIndex(findUrl), 1);
	    localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
	    location.assign("/");
	});

	var currentElem = '';
	//populate promotion from old promotions
	// if old promotions exists
	if (oldPromotions != null) {
	  for (var i = 0; i < oldPromotions.length; i++) {
	    for (prNumber in oldPromotions[i]) {
	      if (oldPromotions[i][prNumber] == chisme) {
	        currentElem = oldPromotions[i];
	        // populate style and region selects if
	        // wine, beer or spirits is type
	        filTypeOption = currentElem.filType;
	        if (filTypeOption == 'wine' || filTypeOption == 'beer' || filTypeOption == 'spirits') {
	        	style.disabled = false;
	        	region.disabled = false;
	        	clearSelect(selectName);
	        	console.log('hello clear editjs');
	        	selectElem.map(writeToSelect);
	        }
	        writeDataToForm(oldPromotions[i]);
	      }
	    }
	  }
	}
})();
