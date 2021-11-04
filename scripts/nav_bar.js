// Selectors (main)
const nav_bar = document.getElementById("nav_bar");



// Selectors (boxes)
    // Games
const games_span = document.createElement("span");              // Creating a span element
const games_text = document.createTextNode("Games");            // Creating the text content
const games_anchor = document.createElement("a");               // Creating the link

games_span.classList.add("top_navigation_span");                // Creating the class for the span
games_anchor.href = "games.html";
games_anchor.appendChild(games_text);                            // Appending text content to the link.
games_span.appendChild(games_anchor);                           // Appending the link to the navigation bar top.

games_span.style.borderRadius = "5%";                          // Additonal Styling
games_anchor.style.textDecoration = "none";
games_anchor.style.color = "white";

    // Hardwware
const hardware_span = document.createElement("span");
const hardware_text = document.createTextNode("Hardware");
const hardware_anchor = document.createElement("a");

hardware_span.classList.add("top_navigation_span");
hardware_anchor.href="hardware.html";
hardware_anchor.appendChild(hardware_text);
hardware_span.appendChild(hardware_anchor);

hardware_span.style.borderRadius = "5%";                          // Additonal Styling
hardware_anchor.style.textDecoration = "none";
hardware_anchor.style.color = "white";

    // Software
const software_span = document.createElement("span");
const software_text = document.createTextNode("Software");
const software_anchor = document.createElement("a");

software_span.classList.add("top_nagivation_span");
software_anchor.href = "software.html";
software_anchor.appendChild(software_text);
software_span.appendChild(software_anchor);

software_span.style.borderRadius = "5%";                          // Additonal Styling
software_anchor.style.textDecoration = "none";
software_anchor.style.color = "white";

    // About us
const about_us_span = document.createElement("span");
const about_us_text = document.createTextNode("About Us");
const about_us_anchor = document.createElement("a");

about_us_span.classList.add("top_navigation_span");
about_us_anchor.href = "about_us.html";
about_us_anchor.appendChild(about_us_text);
about_us_span.appendChild(about_us_anchor);

about_us_span.style.borderRadius = "5%";                          // Additonal Styling
about_us_anchor.style.textDecoration = "none";
about_us_anchor.style.color = "white";

    // Contact Us
const contact_us_span = document.createElement("span");
const contact_us_text = document.createTextNode("Contact Us");
const contact_us_anchor = document.createElement("a");

contact_us_span.classList.add("top_navigation_span");
contact_us_anchor.href = "contact_us.html";
contact_us_anchor.appendChild(contact_us_text);
contact_us_span.appendChild(contact_us_anchor);

contact_us_span.style.borderRadius = "5%";                          // Additonal Styling
contact_us_anchor.style.textDecoration = "none";
contact_us_anchor.style.color = "white";

    // Toogle Menu
const toggle_menu_span = document.createElement("span");
const toggle_menu_text = document.createTextNode("⚙️");
const toggle_menu_anchor = document.createElement("a");

toggle_menu_span.classList.add("top_navigation_span");
toggle_menu_span.appendChild(toggle_menu_text);
toggle_menu_span.appendChild(toggle_menu_anchor);

toggle_menu_span.style.borderRadius = "5%";


// Defining list_of_spans
list_of_spans = [games_span, hardware_span, software_span, about_us_span, contact_us_span, toggle_menu_span];
// Appending all elements to the navigation Bar at the top
for (i of list_of_spans) {
    nav_bar.appendChild(i);
}
    
console.log(nav_bar)

// Styling the nav_bar
nav_bar.style.backgroundColor = "black";
nav_bar.style.borderBottomLeftRadius = "3%";
nav_bar.style.borderBottomRightRadius = "3%";

// Styling the spans
for (i of list_of_spans) {
    i.style.display = "inline-block";
    i.style.backgroundColor = "black";
    i.style.padding = "20px";
    i.style.color = "white"; 
    i.style.textShadow = "0px 1px 6px #ffffff";
    i.style.marginLeft = "9%";
    i.style.cursor = "pointer";

}

games_span.addEventListener("mouseover", function() {
    games_span.style.backgroundColor = "slategray";
})
games_span.addEventListener("mouseout", function() {
    games_span.style.backgroundColor = "black";
})
hardware_span.addEventListener("mouseover", function() {
    hardware_span.style.backgroundColor = "slategray";
})
hardware_span.addEventListener("mouseout", function() {
    hardware_span.style.backgroundColor = "black";
})
software_span.addEventListener("mouseover", function() {
    software_span.style.backgroundColor = "slategray";
})
software_span.addEventListener("mouseout", function() {
    software_span.style.backgroundColor = "black";
})
contact_us_span.addEventListener("mouseover", function() {
    contact_us_span.style.backgroundColor = "slategray";
})
contact_us_span.addEventListener("mouseout", function() {
    contact_us_span.style.backgroundColor = "black";
})
about_us_span.addEventListener("mouseover", function() {
    about_us_span.style.backgroundColor = "slategray";
})
about_us_span.addEventListener("mouseout", function() {
    about_us_span.style.backgroundColor = "black";
})
toggle_menu_span.addEventListener("mouseover", function() {
    toggle_menu_span.style.backgroundColor = "slategray";
})
toggle_menu_span.addEventListener("mouseout", function() {
    toggle_menu_span.style.backgroundColor = "black";
})
