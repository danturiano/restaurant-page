export const pages = function () {
  const homePage = () => {
    const container = document.getElementById("content");

    const mainContainer = document.createElement("main");
    const div = document.createElement("div");
    const header = document.createElement("h1");
    const para = document.createElement("p");

    header.textContent = "An Exquisite Taste of France";
    para.textContent =
      "Experience the essence of French culinary artistry at Le Jardin du Soleil, where every meal is a celebration of flavor and tradition. Our restaurant offers an inviting ambiance reminiscent of a charming Parisian garden.";

    mainContainer.classList.add("main-container");
    div.classList.add("restaurant-description");
    header.classList.add("big-text");
    para.classList.add("small-text");

    div.appendChild(header);
    div.appendChild(para);
    mainContainer.appendChild(div);
    container.appendChild(mainContainer);
  };

  const menuPage = () => {
    const container = document.getElementById("content");
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    // Create the heading
    const heading = document.createElement("h2");
    heading.className = "our-menu";
    heading.textContent = "Our Menu";
    menuContainer.appendChild(heading);

    // Create the all-menu-container
    const allMenuContainer = document.createElement("div");
    allMenuContainer.className = "all-menu-container";

    // Create the menu-choice
    const menuChoice = document.createElement("div");
    menuChoice.className = "menu-choice";

    // Create and append the menu description
    const menuDescript = document.createElement("p");
    menuDescript.className = "menu-descript";
    menuDescript.textContent =
      "Découvrez notre plat principal: le Coq au Vin, un poulet tendre mijoté dans un riche vin rouge, accompagné de champignons, oignons et lardons. Une symphonie de champignons.";
    menuChoice.appendChild(menuDescript);

    for (let i = 0; i < 3; i++) {
      const mainMenu = document.createElement("div");
      mainMenu.className = "main-menu";
      menuChoice.appendChild(mainMenu);
    }

    allMenuContainer.appendChild(menuChoice);

    // Create the sub-choice-container
    const subChoiceContainer = document.createElement("div");
    subChoiceContainer.className = "sub-choice-container";

    // Create and append the sub-choice divs
    for (let i = 0; i < 4; i++) {
      const subChoice = document.createElement("div");
      subChoice.className = "sub-choice";
      subChoiceContainer.appendChild(subChoice);
    }

    allMenuContainer.appendChild(subChoiceContainer);

    // Append the all-menu-container to the main container
    menuContainer.appendChild(allMenuContainer);

    // Append the menuContainer to the body or a specific element in your HTML
    container.appendChild(menuContainer);
  };

  return { homePage, menuPage };
};
