// Define Global Variables
const ul = document.querySelector('ul');
const sections = document.querySelectorAll('section');

// build the nav
for (let section of sections) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  ul.appendChild(li).appendChild(a);
  a.textContent = section.getAttribute('data-nav');
  a.className = 'menu__link';
  a.style.cursor = "pointer";
  //add event when clicked on lists using scrollItonView function
  a.addEventListener('click', function () {
    section.scrollIntoView({ behavior: "smooth", block: "end" });
  });
}

// Add class 'active' when element is near top of viewport
window.onscroll = function () {
  for (let section of sections) {
    const rect = section.getBoundingClientRect();
    let sectionTitle = section.getAttribute("data-nav");
    //add .active class to <li>
    const links = document.querySelectorAll("li");
    if (rect.top > -100 && rect.top < 300) {
      for (let link of links) {// Set lists as active
        link.classList.remove("active");
        if (link.textContent === sectionTitle) {
          link.classList.add("active");
        }
      }
      //add .active class to <div> into sections
      const divs = document.querySelectorAll('.landing__container');
      for (let div of divs) {// Set div as active
        div.classList.remove("active");
        if (div.getAttribute("data-nav") === sectionTitle) {
          div.classList.add("active");
        }
      }
      // //add .active class to <h2>
      // const headers = document.querySelectorAll("h2");
      // for (let header of headers) {// Set h2 as active
      //   header.classList.remove("active");
      //   if (header.textContent === sectionTitle) {
      //     header.classList.add("active");
      //   }
      // }
    }
  }
};

// Build menu 
//add responsive class to page header when clicked
const pageHeader = document.querySelector(".page__header");
const lines = document.querySelector(".lines");
lines.addEventListener('click', function () {
  pageHeader.classList.toggle('responsive');
})