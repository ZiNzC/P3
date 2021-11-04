const nav_bar = document.getElementById("nav_bar");
nav_bar.style.position = 'fixed'
nav_bar.style.width = '100%'
nav_bar.style.top = 0
nav_bar.style.backgroundColor = 'black'


array = ['Homepage', 'Hardware', 'Software', 'Games', 'About us', 'Contact us']//Array to define our navigation bar names

for (i of array) {
    this[i+'span'] = document.createElement('span')//creates dynamic variables using the array
    this[i+'anchor'] = document.createElement('a')
    this[i+'label'] = document.createTextNode(i)

    let span = this[i+'span']

    this[i+'anchor'].href = i+'.html'//adds the link to our navigation bar
    this[i+'anchor'].appendChild(this[i+'label'])
    span.appendChild(this[i+'anchor'])

    span.style.display = "inline-block";//span designs
    span.style.padding = "20px";
    this[i+'anchor'].style.color = "white"; 
    span.style.marginLeft = '8%';

    nav_bar.appendChild(span)//adds to navigation bar

    span.addEventListener('mouseover', function() {//event listeneres to make navigation bar usable
        span.style.backgroundColor = 'grey'
    })
    span.addEventListener('mouseout', function() {
        span.style.backgroundColor = 'transparent'
    })
}  