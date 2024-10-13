const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchBox");

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
      })

// js code to toggle search and cancel mode
//modeToggle.addEventListener("click" , () =>{
 // modeToggle.classList.toggle("active");
//})