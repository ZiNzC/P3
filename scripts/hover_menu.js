const sidebar_div = document.getElementById("sidebar");

    const create_button = document.createElement("button");
    create_button.className = "toggle-btn";
    
    //create_button.innerText = "➡️";
    
    
    // Creating an unordered list
    const ul = document.createElement("ul");
    const li_1 = document.createElement("li");
    const li_2 = document.createElement("li");
    const li_3 = document.createElement("li");
    
        // Adding text to the li
    const text_1 = document.createTextNode("Homepage");
    const text_2 = document.createTextNode("Blast from the Past: Computers");
    const text_3 = document.createTextNode("Blast from the past: Consoles");
    
    // Anchor tags
    const anchor_1 = document.createElement("a");
    const anchor_2 = document.createElement("a");
    const anchor_3 = document.createElement("a");
    anchor_1.appendChild(text_1);
    anchor_2.appendChild(text_2);
    anchor_3.appendChild(text_3);
    anchor_1.href="homepage.html";
    anchor_2.href="computer_slideshow.html";
    anchor_3.href="consoles_slideshow.html";
    anchor_1.classList = "hyperlink";
    anchor_2.classList = "hyperlink";
    anchor_3.classList = "hyperlink";
    
    li_1.appendChild(anchor_1);
    li_2.appendChild(anchor_2);
    li_3.appendChild(anchor_3);
    
        // Appending li to ul
    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    
    // Positioning sidebar content
    ul.style.marginTop = "30vh";
    
    // Appending to main site
    sidebar_div.appendChild(create_button)
    sidebar_div.appendChild(ul)
    
    // EventListeners
        // Mouse hover the button to pull out menu
    sidebar_div.addEventListener("mouseover", function() {
        document.getElementById("sidebar").classList.toggle("active");
    })
        // Mouse leave the menu to make it go away
    sidebar_div.addEventListener("mouseout", function() {
        document.getElementById("sidebar").classList.toggle("active");
    })
    
    
        // Mouse hover a list item 
    li_1.addEventListener("mouseover", function() {
        li_1.style.backgroundColor = "white";
    })
        // Mouse doesn't hover a list item 
    li_1.addEventListener("mouseout", function() {
        li_1.style.backgroundColor = "transparent";
    })
        // Mouse hover a list item 
    li_2.addEventListener("mouseover", function() {
        li_2.style.backgroundColor = "white";
    })
        // Mouse doesn't hover a list item 
    li_2.addEventListener("mouseout", function() {
        li_2.style.backgroundColor = "transparent";
    })
        // Mouse hover a list item 
    li_3.addEventListener("mouseover", function() {
        li_3.style.backgroundColor = "white";
        
    })
        // Mouse doesn't hover a list item 
    li_3.addEventListener("mouseout", function() {
        li_3.style.backgroundColor = "transparent";
    })