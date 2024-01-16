console.log("Script running...");

function openCV() {
    window.open("/cv.txt", "_blank");
}

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){

        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=> {
        document.querySelector('.cross').style.display = 'inline'
    },350)
    }
    
})
var navlinks = document.getElementById("sidebar");

function showMenu() {
    navlinks.style.right = "0";
}

function hideMenu() {
    navlinks.style.right = "-200px";
}

// read more button
const additionalContent = document.getElementById('additionalContent');
const readMoreButton = document.getElementById('readMoreButton');
let isOpen = false;

readMoreButton.addEventListener('click', function() {
    isOpen = !isOpen; // Toggle the state
    if (isOpen) {
        additionalContent.style.display = 'block';
        readMoreButton.textContent = 'Close'; // Change button text
    } else {
        additionalContent.style.display = 'none';
        readMoreButton.textContent = 'Read more'; // Change button text
    }
});

