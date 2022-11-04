// check there is local storage color option
if (window.localStorage.getItem("color-option")) {
    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("color-option"));
    // remove avtive class from all colors list items
    document.querySelectorAll(".colors-list li").forEach(ele => {
        // remove class active from all li items
        ele.classList.remove("active");
        // active class on element with datacolor = localstorage item
        if (ele.dataset.color === window.localStorage.getItem("color-option")) {
            ele.classList.add("active");
        }
    });
}


// show and hide settings
let showHideBtn = document.querySelector(".settings-box");
let headerName = document.querySelector(".header .logo");
let testimonialsHtwo = document.querySelector(".testimonials h2");
function showHide() {
    showHideBtn.classList.toggle("open");
    headerName.classList.toggle("mar");
    testimonialsHtwo.classList.toggle("te")
}


// switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
// loop on all li
colorsLi.forEach(li => {
    // click on every list items
    li.addEventListener("click", e =>{
        // console.log(e.currentTarget.dataset.color)
        // set color on root
        document.documentElement.style.setProperty("--main-color",li.dataset.color);
        // set color on local storage
        window.localStorage.setItem("color-option", e.target.dataset.color);

        // remove active class from all li
        colorsLi.forEach(ele => {
            ele.classList.remove("active");
        })
        // add active class to clicked element
        e.target.classList.add("active");
    });
});

// background random
let backgroundOprion = true;
// variable to control the interval
let backgroundInterval;

// check if there is local storage random bachground item
if (window.localStorage.getItem("background-option")) {
    if (window.localStorage.getItem("background-option") === "true") {
        backgroundOprion = true;
        } else {
        backgroundOprion = false;
    }
    // remove active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(spa => {
        spa.classList.remove("active");
    });
    if (window.localStorage.getItem("background-option") === 'true') {
        document.querySelector('.random-backgrounds .yes').classList.add('active');
    }
    else {
        document.querySelector('.random-backgrounds .no').classList.add('active');
    }
}

// switch background option
const backgroundRandom = document.querySelectorAll(".random-backgrounds span");
// loop on all spans
backgroundRandom.forEach(span => {
    // click on every span items
    span.addEventListener("click", e =>{
        // remove active class from all span
        backgroundRandom.forEach(ele => {
            ele.classList.remove("active");
        });
        // add active class to clicked element
        e.target.classList.add("active");

        if (e.target.dataset.background === "yes") {
            backgroundOprion = true;
            randomize();
            window.localStorage.setItem("background-option", true);
        } else {
            // backgroundOprion = false;
            clearInterval(backgroundInterval);
            window.localStorage.setItem("background-option", false);
        }
    });
});


// select landing page 
let page = document.querySelector(".landing-page");
// get array of images
let arrayOfImages = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];

// change background url 
// page.style.backgroundImage = 'url("images/05.jpg")';


// function to ramndize image
function randomize() {
    if (backgroundOprion === true ) {
// method 1
function changePhotos() {
    let randomNumber = Math.floor(Math.random() * arrayOfImages.length)
    page.style.backgroundImage = `url("images/${arrayOfImages[randomNumber]}")`
}
backgroundInterval = setInterval(changePhotos, 1000);
}
}
// method 2
// setInterval(() => {
//     let randomNumber = Math.floor(Math.random() * arrayOfImages.length)
//     page.style.backgroundImage = `url("images/${arrayOfImages[randomNumber]}")`
// }, 1000);
randomize()



// select skills
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    // skills ofset top
    let skillsOfsetTop = ourSkills.offsetTop;

    // skills Outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // get window height
    let windowHeight = this.innerHeight;

    // window scroll top
    let windowScrollTop = this.pageYOffset 

    if (windowScrollTop > (skillsOfsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};


// create popup with the images
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        // create overlay element
        let overlay = document.createElement("div");
        
        // add class to overlay
        overlay.className = "popup-overlay";
        
        // append the overlay to the body
        document.body.appendChild(overlay);

        // create the popup box
        let popupBox = document.createElement("div");

        // add class to the popup box
        popupBox.className = "popup-box";

        // create the image 
        let popupImage = document.createElement("img");

        // set image src
        popupImage.src = e.target.src;

        // append the image to the popupbox
        popupBox.appendChild(popupImage);

        // append popupbox to the body
        document.body.appendChild(popupBox);

        if (img.alt !== null) {
            // create hidding
            let imageHeading = document.createElement("h3");

            // add text to heading
            imageHeading.appendChild(document.createTextNode(img.alt))

            // add heading to the popup
            popupBox.prepend(imageHeading);
        }

        // create the botton to close the popup
        let btnClose = document.createElement("span");

        // create the close btn text
        btnClose.appendChild(document.createTextNode("X"));

        // create class to close btn
        btnClose.className = "close-btn";

        // append the close btn to the popup box
        popupBox.appendChild(btnClose);

        // remove popupbox and overlay
        
        // btnClose.onclick = function () {
        //     popupBox.style.display = "none";
        //     overlay.style.display = 'none';
        // }
    })
})
document.addEventListener("click", e => {
    if (e.target.classList.contains("close-btn")) {
        // remove the popup box
        e.target.parentNode.remove();

        // remove the overlay
        document.querySelector(".popup-overlay").remove();
    }
});

// select all bullets
const bullets = document.querySelectorAll(".nav-bullets .bullets");
// bullets.forEach(bullet => {
//     bullet.addEventListener('click', e => {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior : 'smooth'
//         })
//     })
// });
// select links
const links = document.querySelectorAll(".links a");
// links.forEach(link => {
//     link.addEventListener('click', ele => {
//         ele.preventDefault()
//         document.querySelector(ele.target.dataset.sec).scrollIntoView({
//             behavior : 'smooth'
//         })
//     })
// });
// do these with function 
function scrollToSomewhere (elements) {
    elements.forEach(ele => {
        ele.addEventListener('click', e => {
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            })
        })
    });
}
scrollToSomewhere(bullets);
scrollToSomewhere(links);

// show and hide bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let ParentBullets = document.querySelector(".nav-bullets");

bulletsSpan.forEach(span => {
    span.classList.remove("active")
});
if (window.localStorage.getItem("bullets-option") === "show") {
    ParentBullets.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
}
else {
    ParentBullets.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
};

bulletsSpan.forEach(bullet => {
    bullet.addEventListener('click', e =>{
        if (e.target.dataset.display == "show") {
            ParentBullets.style.display = "block";
            window.localStorage.setItem("bullets-option", "show");
        } else {
            ParentBullets.style.display = "none";
            window.localStorage.setItem("bullets-option", "hide");
        }
        bulletsSpan.forEach(span =>{
            span.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});


// reset all options
let btnReset = document.querySelector("button.reset-option");
btnReset.onclick = function () {
    window.localStorage.removeItem("bullets-option");
    window.localStorage.removeItem("background-option");
    window.localStorage.removeItem("color-option");
    window.location.reload()
}


// toggle menu
let btnMenu = document.querySelector(".toggle-menu");
let linksMenu = document.querySelector("ul.links");

btnMenu.onclick = function (event) {
    // stop propagation
    event.stopPropagation();
    this.classList.toggle("menu-avtive");
    linksMenu.classList.toggle("open");
};

// click anywhere outside menu and toggletbn
document.addEventListener('click', e => {
    if (e.target !== btnMenu && e.target !== linksMenu) {
        // check if menulinks is open
        if (linksMenu.classList.contains("open")) {
            btnMenu.classList.toggle("menu-avtive");
            linksMenu.classList.toggle("open");
        }
    }
})
// stop propagation on menuliks
linksMenu.onclick = function (e) {
    e.stopPropagation();
};