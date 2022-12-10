
// початок мого скріпта

const frame = document.createElement("div");
frame.classList = "container";
document.body.appendChild(frame);

const titleBox = document.createElement("div");
frame.appendChild(titleBox);
titleBox.setAttribute(
  "style",
  "display: flex; justify-content: space-between;"
);

const hamburger = document.createElement("div");
titleBox.appendChild(hamburger);
hamburger.classList = "hamburger";
hamburger.setAttribute(
  "style",
  "height: 70px; padding: 10px; margin-top: 50px;"
);

const hamburgerItem0 = document.createElement("div");
hamburger.appendChild(hamburgerItem0);
hamburgerItem0.style.cssText =
  "width: 100px;   height: 10px;   background-color: brown;   border: 2px solid black;   margin-bottom: 10px;";

const hamburgerItem1 = document.createElement("div");
hamburger.appendChild(hamburgerItem1);
hamburgerItem1.style.cssText =
  "width: 100px;   height: 10px;   background-color: brown;   border: 2px solid black;   margin-bottom: 10px;";

const hamburgerItem2 = document.createElement("div");
hamburger.appendChild(hamburgerItem2);
hamburgerItem2.style.cssText =
  "width: 100px;   height: 10px;   background-color: brown;   border: 2px solid black;   margin-bottom: 10px;";

const glassImg = document.createElement("img");
glassImg.src = "./img/glass.png";
titleBox.appendChild(glassImg);
glassImg.setAttribute("style", "width: 200px;");

const menuList = document.createElement("ul");
hamburger.appendChild(menuList);
menuList.setAttribute("style", "display: none;");
hamburger.addEventListener("click", function () {
  menuList.style.display = "block";
});

const crossImg = document.createElement("img");
crossImg.src = "./img/cross_img.png";
menuList.appendChild(crossImg);
crossImg.setAttribute("style", "width: 50px; display: block; margin-top: 50px;");
crossImg.addEventListener("click", function () {
  menuList.style.display = "none";
});

const menuItem0 = document.createElement("li");
menuList.appendChild(menuItem0);
menuItem0.setAttribute("style", "display: inline-block; font-size: 48px;");
menuItem0.textContent = "Opinion";

const menuItem1 = document.createElement("li");
menuList.appendChild(menuItem1);
menuItem1.setAttribute("style", "display: block; font-size: 48px;");
menuItem1.textContent = "Economy";

const menuItem2 = document.createElement("li");
menuList.appendChild(menuItem2);
menuItem2.setAttribute("style", "display: block; font-size: 48px;");
menuItem2.textContent = "International";
