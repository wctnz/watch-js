/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var output = document.getElementById("output");
var fullBtn = document.getElementById("full");
var dateBtn = document.getElementById("date");
var timeBtn = document.getElementById("time");
var mode = "full";
var update = function update() {
  return output.textContent = format(mode);
};
var changeMode = function changeMode(changedMode) {
  return function () {
    mode = changedMode;
    update();
  };
};
fullBtn.onclick = changeMode("full");
dateBtn.onclick = changeMode("date");
timeBtn.onclick = changeMode("time");
update();
var intervalId = setInterval(function () {
  update();
  return function () {
    clearInterval(intervalId);
  };
}, 1000);
function format(formatMode) {
  var now = new Date();
  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}
/******/ })()
;
//# sourceMappingURL=main.js.map