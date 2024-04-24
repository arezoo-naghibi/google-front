let modall = document.getElementById("googleapps");
let body = document.getElementById("body");
modall.addEventListener("click", toggle);

let containerApps = document.getElementById("idcontainer");

function toggle() {
  if (containerApps.classList.contains("hidden")) {
    containerApps.classList.add("show");
    containerApps.classList.remove("hidden");
  } else {
    containerApps.classList.add("hidden");
    containerApps.classList.remove("show");
  }
}
body.addEventListener("click", hideModall);
function hideModall(e) {
  if (!e.target.closest("#googleapps") && !e.target.closest("#idcontainer")) {
    containerApps.classList.add("hidden");
    containerApps.classList.remove("show");
  }
}
