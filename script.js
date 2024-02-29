const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


const image = document.getElementById('image');

    // Store original source and hover source
    const originalSrc = image.src;
    const hoverSrc = 'images/Detail_PepperMill_02_Holcomb_Kitchen_Lifestyle_Product_Seattle_Design.webp'; // Change this to the path of your hover image

    // Change source on hover
    image.addEventListener('mouseover', () => {
        image.src = hoverSrc;
    });

    // Change back to original source on mouseout
    image.addEventListener('mouseout', () => {
        image.src = originalSrc;
    });


const image2 = document.getElementById('image2');

    // Store original source and hover source
    const originalSrc2 = image2.src;
    const hoverSrc2 = 'images/Detail_Decanter_02_Holcomb_Kitchen_Lifestyle_Product_Seattle_Design.webp'; // Change this to the path of your hover image

    // Change source on hover
    image2.addEventListener('mouseover', () => {
        image2.src = hoverSrc2;
    });

    // Change back to original source on mouseout
    image2.addEventListener('mouseout', () => {
        image2.src = originalSrc2;
    });

const image3 = document.getElementById('image3');

    // Store original source and hover source
    const originalSrc3 = image3.src;
    const hoverSrc3 = 'images/Holcomb_0_Kitchen_Product-14.webp'; // Change this to the path of your hover image

    // Change source on hover
    image3.addEventListener('mouseover', () => {
        image3.src = hoverSrc3;
    });

    // Change back to original source on mouseout
    image3.addEventListener('mouseout', () => {
        image3.src = originalSrc3;
    });

    const navbarToggle = navbar.querySelector("#navbar-toggle");
    const navbarMenu = document.querySelector("#navbar-menu");
    const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
    let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
    
    const toggleNavbarVisibility = () => {
      isNavbarExpanded = !isNavbarExpanded;
      navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    };
    
    navbarToggle.addEventListener("click", toggleNavbarVisibility);
    
    navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
    navbarMenu.addEventListener("click", toggleNavbarVisibility);






    
const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const section1 = document.querySelector('.section-1');
            if (entry.isIntersecting) {
                section1.classList.add('show');
            } else {
                section1.classList.remove('show');
            }
        });
    });
    
    const section2 = document.querySelector('.section-2');
    observer.observe(section2);
