// NAV items (5 total)
const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

// Resume tab elements
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');

// Portfolio tab elements
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

// 1. NAV ROTATION: 5 faces => 72-degree increments
navs.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    // Remove 'active' from current nav
    document.querySelector('.nav-list li.active')?.classList.remove('active');
    nav.classList.add('active');
    //const activeNav = document.querySelector('.nav-list li.active');
    //if (activeNav) activeNav.classList.remove('active');
    
    // Add 'active' to clicked nav
    //navItem.classList.add('active');

    // Rotate the .box so the chosen face is front
    cube.style.transform = `rotateY(${idx * -90}deg)`;

    document.querySelector('.section.active')?.classList.remove('active');
    sections[idx].classList.add('active');

    const array = Array.from(sections);
    const arrSecs =array.slice(1, -1);
    arrSecs.forEach(arrSecs => {
      if(arrSecs.classList.contains('active')){
        sections[4].classList.add('action-contact');
      }
    });
    if(sections[0].classList.contains('active')){
      sections[4].classList.remove('action-contact');
    }
  

  });
});

// 2. RESUME TABS
resumeLists.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    // Remove 'active' from any current resume tab
    document.querySelector('.resume-list.active')?.classList.remove('active');
    //const currentActive = document.querySelector('.resume-list.active');
    //if (currentActive) currentActive.classList.remove('active');
    // Add 'active'
    tab.classList.add('active');

    // Hide the currently active resume-box
    document.querySelector('.resume-box.active')?.classList.remove('active');
    //const activeBox = document.querySelector('.resume-box.active');
    //if (activeBox) activeBox.classList.remove('active');
    //list.classList.add('active');

    // Show the correct resume-box
    resumeBoxes[idx].classList.add('active');
  });
});

// 3. PORTFOLIO TABS
portfolioLists.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    // Remove 'active' from any current portfolio tab
    document.querySelector('.portfolio-list.active')?.classList.remove('active');
    //const currentActive = document.querySelector('.portfolio-list.active');
    //if (currentActive) currentActive.classList.remove('active');
    // Add 'active'
    tab.classList.add('active');

    // Hide the currently active portfolio-box
    document.querySelector('.portfolio-box.active')?.classList.remove('active');
    //const activeBox = document.querySelector('.portfolio-box.active');
    //if (activeBox) activeBox.classList.remove('active');

    // Show the correct portfolio-box
    portfolioBoxes[idx].classList.add('active');
  });
});

setTimeout(() => {
  sections[4].classList.remove('active');
}, 1500);
