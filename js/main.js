const all = document.getElementsByTagName("body")[0]; // The entire page
var page_titles = ["HOME", "WHERE?", "HOW?", "RESOURCES"];
var page_links = ["index.html", "where.html", "how.html", "recources.html"];
var num_pages = page_links.length;
const navbar_container = document.createElement("div");
navbar_container.setAttribute("class", "navbar");
const navbar = document.createElement("ul");

for(var i = 0; i < num_pages; i++) { // Add each link to the ul
    var list_item = document.createElement("li");
    var item_link = document.createElement("a");
    item_link.setAttribute("href", page_links[i]);
    item_link.innerHTML = page_titles[i];
    list_item.appendChild(item_link);
    navbar.appendChild(list_item);
}

var src_item = document.createElement("li");
src_item.setAttribute("style", "float: right;");
var src_link = document.createElement("a");
src_link.setAttribute("href", "sources.html");
src_link.innerHTML = "SOURCES";
src_item.appendChild(src_link);
navbar.appendChild(src_item)

navbar_container.appendChild(navbar);
all.insertBefore(navbar_container, all.childNodes[0]);

const header_container = document.createElement("div");
header_container.setAttribute("class", "header");
const page_header = document.createElement("h1"); // Header of page
const page_title = document.title; // Get title of page
page_header.innerHTML = page_title; // Set inner HTML of h1 to the title of page
header_container.appendChild(page_header);
//all.appendChild(header_container); // Add the h1 to the page
all.insertBefore(header_container, all.childNodes[1]);
