// Tab variables for hero banner
home = document.getElementById("home");
about = document.getElementById("about");
advanced = document.getElementById("advanced");
references = document.getElementById("references");
contact = document.getElementById("contact");
files = document.getElementById("files");
pagecontainer = document.getElementById("pagecontent");
calculator = document.getElementById("calculator");
//resizer for page content
pagecontainer.onload = function () {
  pagecontainer.style.height =
    pagecontainer.contentWindow.document.getElementById("wrapper")
      .scrollHeight + "px";
};

// Event listeners for tab variables

home.addEventListener("click", (e) => {
  if (
    home.classList.contains("herotab") == false ||
    document.getElementById("pagecontent").src != "/homecontent"
  ) {
    temp = document.getElementsByClassName("herotab");
    temp[0].setAttribute("aria-selected", false);
    temp[0].classList.remove("has-text-black-bis");
    temp[0].classList.remove("herotab");
    home.classList.add("herotab");
    home.classList.add("has-text-black-bis");
    home.setAttribute("aria-selected", true);
    temp = "";
    document.getElementById("pagecontent").src = "/homecontent";
  }
});
about.addEventListener("click", (e) => {
  if (about.classList.contains("herotab") == false) {
    temp = document.getElementsByClassName("herotab");
    temp[0].setAttribute("aria-selected", false);
    temp[0].classList.remove("has-text-black-bis");
    temp[0].classList.remove("herotab");
    about.classList.add("herotab");
    about.classList.add("has-text-black-bis");
    about.setAttribute("aria-selected", true);
    temp = "";
    document.getElementById("pagecontent").src = "/about";
  }
});
advanced.addEventListener("click", (e) => {
  if (advanced.classList.contains("herotab") == false) {
    temp = document.getElementsByClassName("herotab");
    temp[0].setAttribute("aria-selected", false);
    temp[0].classList.remove("has-text-black-bis");
    temp[0].classList.remove("herotab");
    advanced.classList.add("herotab");
    advanced.classList.add("has-text-black-bis");
    advanced.setAttribute("aria-selected", true);
    temp = "";
    document.getElementById("pagecontent").src = "/advanced";
  }
});
references.addEventListener("click", (e) => {
  if (references.classList.contains("herotab") == false) {
    temp = document.getElementsByClassName("herotab");
    temp[0].setAttribute("aria-selected", false);
    temp[0].classList.remove("has-text-black-bis");
    temp[0].classList.remove("herotab");
    references.classList.add("herotab");
    references.classList.add("has-text-black-bis");
    references.setAttribute("aria-selected", true);
    temp = "";
    document.getElementById("pagecontent").src = "/references";
  }
});
contact.addEventListener("click", (e) => {
  if (contact.classList.contains("herotab") == false) {
    temp = document.getElementsByClassName("herotab");
    temp[0].setAttribute("aria-selected", false);
    temp[0].classList.remove("has-text-black-bis");
    temp[0].classList.remove("herotab");
    contact.classList.add("herotab");
    contact.classList.add("has-text-black-bis");
    contact.setAttribute("aria-selected", true);
    temp = "";
    document.getElementById("pagecontent").src = "/contact";
  }
});
files.addEventListener("click", (e) => {
  if (files.classList.contains("herotab") == false) {
    temp = document.getElementsByClassName("herotab");
    temp[0].setAttribute("aria-selected", false);
    temp[0].classList.remove("has-text-black-bis");
    temp[0].classList.remove("herotab");
    files.classList.add("herotab");
    files.classList.add("has-text-black-bis");
    files.setAttribute("aria-selected", true);
    temp = "";
    document.getElementById("pagecontent").src = "/files";
  }
});

// Here "addEventListener" is for standards-compliant web browsers and "attachEvent" is for IE Browsers.
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child IFrame window
eventer(
  messageEvent,
  function (e) {
    pagecontainer.style.height = e.data;
  },
  false
);
