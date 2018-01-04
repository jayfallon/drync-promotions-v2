(function(){
    var stores = ['Nantasket Junction', 'East Templeton', 'Colrain', 'Dingley Dell', 'Ocean Grove', 'Needham Junction', 'Alms House', 'Lowell', 'Truro', 'Marlboro', 'Fort Warren', 'Camp Marion White', 'Mahkeenac Heights', 'North Hanson', 'Milton', 'Milton Upper Mills', 'West Boxford', 'Shallow Pond', 'Summit Grove', 'Fort Lucas', 'Camp Sayre', 'Grafton', 'Stoughton Junction', 'Williamsville', 'East Sharon', 'Sunnyside', 'Newton Corner', 'Mill Valley', 'Mercer Square', 'Trots Hills', 'Westport Point', 'Cottage Park', 'Willow Lane', 'Sissons Corner', 'Marshfield Hills', 'Oklahoma Heights', 'Dunstable', 'Beach Park', 'East Blackstone', 'Morseville'
    ]

    function populateStores(array) {
        allStores = document.getElementById('allStores');
        for(e in array) {
            storeData = document.createElement('div');
            storeData.setAttribute('class', 'all-stores-data');
            storeInp = document.createElement('input');
            storeInp.setAttribute('type', 'checkbox');
            storeInp.setAttribute('name', e);
            storeInp.checked = true;
            storeLabel = document.createElement('label');
            storeLabel.setAttribute('for', e);
            storeLabelTx = document.createTextNode(array[e]);
            storeLabel.appendChild(storeLabelTx);
            storeData.appendChild(storeInp);
            storeData.appendChild(storeLabel);
            allStores.appendChild(storeData);
        }
    }

    populateStores(stores);

    $('span.store-link').click(function(){
        var link = $(this);
        var view = $('#allStoresWrapper');
        view.slideToggle(function() {
            if ($(this).is(':visible')) {
                 link.text('Hide All');
            } else {
                 link.text('Show All');
            }
        });
    });
})();
