// Tambahkan kode JavaScript kalian di file ini
// Soal No 6
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

// Soal No 7
function isNumber(str) {
  return isNaN(str) ? false : true;
}

// Soal No 8
function checkboxIsChecked() {
  const status = document.getElementById("status").checked;

  return status ? true : false;
}

// Soal No 9
function validateFormData(data) {
  if (data) {
    if (isNumber(data.zipCode) && checkboxIsChecked()) {
      return true;
    }
  }

  return false;
}

// Soal No 10
function submit() {
  event.preventDefault();

  let formData = handleGetFormData();
  let warning = document.getElementById("warning");

  if (!validateFormData(formData)) {
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").textContent = "";
  }
}

let btnForm = document.getElementById("submit-form");
btnForm.addEventListener("click", submit);

//  Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Background Header
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// Scroll Selections Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((curr) => {
    const sectionHeight = curr.offsetHeight,
      sectionTop = curr.offsetTop - 58,
      sectionId = curr.getAttribute("id"),
      targetLink = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (targetLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);
