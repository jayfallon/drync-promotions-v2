(function(){

	var denomyn = '';

	filRegion.addEventListener('change', function(event){
		denomyn = event.target.options[event.target.selectedIndex].dataset.denomyn;
	});

	function newPromotion( prNumber, prName, prCode, prStatus, prDiscAmount, prDiscCount, prDiscType, prDiscMin, prSaleItems, prStart, prStop, prMinPurch, prMaxPurch, filType, filStyle, filRegion, filPrice, prMessage ) {
	    this.prNumber = prNumber;
	    this.prName = prName;
	    this.prCode = prCode;
	    this.prStatus = prStatus;
	    this.prDiscAmount = prDiscAmount;
	    this.prDiscType = prDiscType;
	    this.prDiscMin = prDiscMin;
	    this.prDiscCount = prDiscCount;
	    this.prSaleItems = prSaleItems;
	    this.prStart = prStart;
	    this.prStop = prStop;
	    this.prMinPurch = prMinPurch;
	    this.prMaxPurch = prMaxPurch;
	    this.filType = filType;
	    this.filStyle = filStyle;
	    this.filRegion = filRegion;
	    this.filPrice = filPrice;
	    this.prMessage = prMessage;
	}

	var ID = function () {
	  // Math.random should be unique because of its seeding algorithm.
	  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
	  // after the decimal.
	  return Math.random().toString(36).substr(2, 9);
	};

	var saveButton = document.getElementById("prSave");
	saveButton.addEventListener('click', saveForm);

	function submitForm(prNumber) {
	    location.assign("view.html?" + prNumber);
	}

	// set status
	prStatusVal = 'active';
	// change status
	prStatus.addEventListener('click', function(){
	    var status = document.getElementById('status');
	    if (this.checked == true) {
	        prStatusVal = 'active';
	        status.innerHTML = "Active";
	    } else if (this.checked != true){
	        prStatusVal = 'inactive';
	        status.innerHTML = "Inactive";
	    }
	})

	function saveForm(){
	    //Generate unique url
	    var prNumber = ID();
	    //Get values from the web form
	    var prName = document.getElementById("prName").value;
	    if (!prName) {
	        prName = "Temp" + prNumber;
	    }
	    var prCode = document.getElementById("prCode").value;
	    var prStatus = prStatusVal;
	    var prDiscAmount = document.getElementById("prDiscAmount").value;
	    var prDiscType = document.getElementById("prDiscType").value;
	    var prDiscMin = document.getElementById("prDiscMin").value;
	    var prDiscCount = document.getElementById("prDiscCount").value;
	    var prSaleItems = document.getElementById("prSaleItems").checked;
	    var prStores = document.getElementById("prStores").checked;
	    var prStart = document.getElementById("prStart").value;
	    var prStop = document.getElementById("prStop").value;
	    var prMinPurch = document.getElementById("prMinPurch").value;
	    var prMaxPurch = document.getElementById("prMaxPurch").value;
	    var filType = document.getElementById("filType").value;
	    var filStyle = document.getElementById("filStyle").value;
	    var filRegion = document.getElementById("filRegion").value;
	    var filPrice = document.getElementById("filPrice").value;
	    var prMessageRaw = 'Save ' + prDiscAmount + ' ' + prDiscType + ' on ' + denomyn + ' ' + filStyle + ' ' + filType + ' from ' + prStart + ' to ' + prStop + ' when you spend $' + prDiscMin + ' or more.';
	    var prMessage = prMessageRaw.replace(/  +/g, ' ');


	    // post any new form data to the constructor object
	    var myNewPromotion = new newPromotion( prNumber, prName, prCode, prStatus, prDiscAmount, prDiscCount, prDiscType, prDiscMin, prSaleItems, prStart, prStop, prMinPurch, prMaxPurch, filType, filStyle, filRegion, filPrice, prMessage );

	    // append myNewPromotion to existing array
	    oldPromotions.push(myNewPromotion);

	    // persist your newly appended array to a localStorage object
	    localStorage.setItem('PromotionsArray', JSON.stringify(oldPromotions));
	    // submit to view page
	    submitForm(prNumber);
	    // stop the form behavior
	    return false;
	}



	window.onerror = function(msg, url, linenumber) {
	    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
	    return true;
	}
})();
