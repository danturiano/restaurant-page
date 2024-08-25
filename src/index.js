import "./general.css";
import "./landing.css";
import "./menu.css";
import { pages } from "./initializePage";

function PageController() {
  const { homePage } = pages();
  const { menuPage } = pages();

  //Default Initialize Home Page
  document.addEventListener("DOMContentLoaded", homePage);

  const container = document.getElementById("content");

  const HomeBtn = document.querySelector(".home");
  const MenuBtn = document.querySelector(".menu");
  const aboutBtn = document.querySelector(".about");

  HomeBtn.addEventListener("click", () => {
    container.textContent = "";
    homePage();
  });

  MenuBtn.addEventListener("click", () => {
    container.textContent = "";
    menuPage();
  });
}

PageController();
