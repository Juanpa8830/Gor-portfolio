
//typing animation

var typed = new Typed(".typing", {
  strings: 
  [
  "Servicio técnico especializado y mantenimiento de equipos industriales.", "",
  "Soldaduras especializadas segun procedimientos: SAW, MIGMAG, GMAW, FSAW, TIG, GTAW y SMAW.", "",
  "Rolado de láminas.", "",   
  "Fabricación de piezas metalmecánicas.", "",
  "Soluciones de ingeniería.", ""
],
typeSpeed: 60,
backSpeed: 1,
loop: true
});

// Aside

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
  allSection = document.querySelectorAll(".section");
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {

    removeBackSection();

       for (let j = 0; j < totalNavList; j++) {
        if(navList[j].querySelector("a").classList.contains("active")){

          addBackSection(j);
         //allSection[j].classList.add("back-section");
        }
           navList[j].querySelector("a").classList.remove("active");
          }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200){
      asideSectionTogglerBtn();
    }
    });
}

function removeBackSection() {
  for (let i=0; i<totalSection; i++){
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num){
  allSection[num].classList.add("back-section");
}

function showSection(element){

for(let i=0; i<totalSection; i++){
  allSection[i].classList.remove("active");
}  
const target = element.getAttribute("href").split("#")[1];
document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
  for(let i=0; i<totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function(){
  const sectionIndex = this.getAttribute("data-section-index");
  //console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");

  navTogglerBtn.addEventListener("click", ()=>{
      asideSectionTogglerBtn();
  })

  function removeBackSection(){
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.remove("back-section");
  } 
}


  function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i=0; i<totalSection; i++){
      allSection[i].classList.toggle("open");
    }
  }


// email form validation
const errorMessage = document.getElementById('error_message');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  if (!validateName(nameInput.value)) {
    event.preventDefault();
    errorMessage.textContent = 'El campo de nombre solo debe contener letras.';
    errorMessage.style.display = 'inline-block';
  } else if (!validateEmail(emailInput.value)) {
    event.preventDefault();
    errorMessage.textContent = 'Solo se permiten caracteres en minúsculas en el correo electrónico.';
    errorMessage.style.display = 'inline-block';
  } else {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  }
});

function validateName(name) {
  // Expresión regular para verificar si solo contiene letras
  const lettersRegex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;
  return lettersRegex.test(name);
}

function validateEmail(email) {
  // Expresión regular para verificar si solo contiene caracteres en minúsculas en el correo electrónico
  const lowercaseRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return lowercaseRegex.test(email);
}

window.onload = function resetForm() {
  const form = document.getElementById('form');
  const scrollYPosition = localStorage.getItem('scrollYPosition');

  if (scrollYPosition) {
    window.scrollTo(0, scrollYPosition);
  }

  form.reset();
};

window.addEventListener('beforeunload', function saveScrollYPosition() {
  const scrollYPosition = window.scrollY;
  localStorage.setItem('scrollYPosition', scrollYPosition);
});