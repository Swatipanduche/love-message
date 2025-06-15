


window.onload = function () {
  document.getElementById("yesBtn").addEventListener("click", function () {
    document.getElementById("hidden-content").style.display = "block";
  });

  document.getElementById("noBtn").addEventListener("click", function () {
    document.getElementById("hidden-content").style.display = "none";
  });
};
