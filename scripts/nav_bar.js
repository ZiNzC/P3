const nav_bar = document.getElementById("nav_bar");
nav_bar.style.position = 'fixed'
nav_bar.style.width = '100%'
nav_bar.style.top = 0
nav_bar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
nav_bar.style.zIndex = '2'

array = ['Homepage', 'Hardware', 'Software', 'Games', 'About us', 'Contact us']//Array to define our navigation bar names

for (i of array) {
    this[i+'span'] = document.createElement('span')//creates dynamic variables using the array
    this[i+'anchor'] = document.createElement('a')
    this[i+'anchor'].classList = 'hyperlink'

    let span = this[i+'span']

    this[i+'anchor'].href = i+'.html'//adds the link to our navigation bar
    this[i+'anchor'].appendChild(document.createTextNode(i))

    span.appendChild(this[i+'anchor'])

    span.style.display = "inline-block";//span designs
    span.style.padding = "20px";
    span.style.marginLeft = '8%';

    nav_bar.appendChild(span)//adds to navigation bar
}  
/*
const dark_mode_btn = document.createElement('button')
dark_mode_btn.innerText = '☀️'

dark_mode_btn.addEventListener("mouseover", function() {
    dark_mode_btn.style.fontSize = "20px";
})
dark_mode_btn.addEventListener("mouseout", function() {
    dark_mode_btn.style.fontSize = "14px";
})

// Dark Mode Function
let mode = "Light"
    dark_mode_btn.addEventListener("click", function() {
        if (mode === "Light") {
            document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/ZiNzC/P3/Timon/3392075.jpg";
            dark_mode_btn.innerText = "🌑";
            mode = "Dark";
        } else if (mode === "Dark") {
            document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/ZiNzC/P3/Timon/images/3392075.jpg)";
            dark_mode_btn.innerText = "☀️";
            mode = "Light";
        }
    })

*/

    