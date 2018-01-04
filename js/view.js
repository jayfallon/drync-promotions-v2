(function(){

	var staticData = ['prName', 'prCode', 'prStatus', 'prDiscAmount', 'prDiscType', 'prDiscMin', 'prDiscCount', 'prSaleItems', 'prStores', 'prStart', 'prStop', 'prMinPurch', 'prMaxPurch', 'filType', 'filStyle', 'filRegion', 'filPrice', 'prMessage'];

	var urlParams = new URLSearchParams(window.location.search);

	var entries = urlParams.entries();
	for(pair of entries) {
	  var chisme = pair[0];
	}

	var element = document.getElementById('prMessage');

	function writeEditLink() {
		edit = document.getElementById('prEditCell');
		editLink = document.createElement('a');
		editLinkTx = document.createTextNode('Edit this promotion');
		editLink.setAttribute('href', 'edit.html?' + chisme);
		editLink.appendChild(editLinkTx);
		edit.appendChild(editLink);
	}

	writeEditLink();

	var currentElem = '';
	if (oldPromotions != null) {
	  for (var i = 0; i < oldPromotions.length; i++) {
	    for (prNumber in oldPromotions[i]) {
	      if (oldPromotions[i][prNumber] == chisme) {
	      	currentElem = oldPromotions[i];
	      }
	    }
	  }
	}

	function writeStaticData(dataObject) {
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

		prName.innerHTML = dataObject.prName;
		prCode.innerHTML = dataObject.prCode;
		prDiscType.innerHTML = dataObject.prDiscType;
		if (dataObject.prDiscType == 'percentage') {
			prDiscAmount.innerHTML = dataObject.prDiscAmount+ '%';
		} else if (dataObject.prDiscType == 'amount') {
			prDiscAmount.innerHTML = '$'+dataObject.prDiscAmount;
		}
		prDiscMin.innerHTML = '$'+dataObject.prDiscMin;
		prDiscCount.innerHTML = dataObject.prDiscCount;
		prStart.innerHTML = dataObject.prStart;
		prStop.innerHTML = dataObject.prStop;
		prMinPurch.innerHTML = '$'+dataObject.prMinPurch;
		prMaxPurch.innerHTML = '$'+dataObject.prMaxPurch;
		filType.innerHTML = dataObject.filType;
		filStyle.innerHTML = dataObject.filStyle;
		filRegion.innerHTML = dataObject.filRegion;
		filPrice.innerHTML = dataObject.filPrice;
		prMessage.innerHTML = dataObject.prMessage;
	}

	writeStaticData(currentElem);
})();
