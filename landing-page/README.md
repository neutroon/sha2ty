# Landing Page Project
## author name
Hesham Mansour

## technologies
### navbar
* nav is dynamic
* lists in nav hilighted with color `#333` when section it's in viewPort
* nav is responsive with small screen less than 689px
### page 
* page is responsive with small screen
* sections in page was hilighted when it's in viewPort

## technologies
* add eventListener scrolling to element when clicked on lists using scrollItonView function with smooth scrolling

  ```a.addEventListener('click', function () {
    section.scrollIntoView({behavior:"smooth", block:"end"});
  });```

* knowing accurate position of sections inside the viewport using
`getBoundingClientRect()`