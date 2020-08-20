//https://data.cityofnewyork.us/resource/sxx4-xhzg.json
var table_container = document.createElement("div");
table_container.setAttribute("class", "col23 scroll");

var nycCans = [];
function loadFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    loadData(this);
	}
    }
    xhttp.open("GET", "https://data.cityofnewyork.us/resource/sxx4-xhzg.json", true);
    xhttp.send();
}

function loadData(xml) {
    nycCans = [];
    table_container.innerHTML = "";

    var borough = document.getElementById("choose_borough").value;
    var data = JSON.parse(xml.response);
    var data_length = data.length;
    for(var i = 0; i < data_length; i++) {
	if(data[i]["borough"] == borough) {
	    nycCans.push(data[i]);
	}
    }

    var nycCans_length = nycCans.length;
    var table = document.createElement("table");
    table.setAttribute("class", "dataTable");
    
    var header_row = document.createElement("tr");
    var psn_th = document.createElement("th");
    psn_th.innerHTML = "PARK SITE NAME";
    var address_th = document.createElement("th");
    address_th.innerHTML = "ADDRESS";
    var siteType_th = document.createElement("th");
    siteType_th.innerHTML = "SITE TYPE";
    var borough_th = document.createElement("th");
    borough_th.innerHTML = "BOROUGH";
    header_row.appendChild(psn_th);
    header_row.appendChild(address_th);
    header_row.appendChild(siteType_th);
    header_row.appendChild(borough_th);
    table.appendChild(header_row);

    for(var t = 0; t < nycCans_length; t++) {
	var row = document.createElement("tr");
	var address = document.createElement("td");
	var park_site_name = document.createElement("td");
	var site_type = document.createElement("td");
	var borough = document.createElement("td");
	address.innerHTML = nycCans[t]["address"];
	park_site_name.innerHTML = nycCans[t]["park_site_name"];
	site_type.innerHTML = nycCans[t]["site_type"];
	borough.innerHTML = nycCans[t]["borough"];
	row.appendChild(park_site_name);
	row.appendChild(address);
	row.appendChild(site_type);
	row.appendChild(borough);
	table.appendChild(row);
    }

    table_container.appendChild(table);
    all.appendChild(table_container);
}

