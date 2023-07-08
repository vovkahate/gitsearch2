export class Render {
  constructor() {
    this.app = document.querySelector(".app");

    this.title = this.createElement("h5", "center-align");
    this.title.textContent = "Github search users";

    this.counter = this.createElement("div", "counter");
    this.counter.classList.add("center-align");
    this.counter.textContent = "Начните вводить имя...";

    this.container = this.createElement("div", "container");

    this.inputDiv = this.createElement("div", "input-field");
    this.input = this.createElement("input", "autocomplete");
    this.input.type = "text";
    this.input.id = "search-input";
    this.label = this.createElement("label");
    this.label.setAttribute("for", "search-input");
    this.label.textContent = "Поиск пользователей";
    this.inputDiv.appendChild(this.input);
    this.inputDiv.appendChild(this.label);
    this.container.appendChild(this.inputDiv);

    this.main = this.createElement("div", "main");
    this.main.classList.add("container");

    this.usersWrapper = this.createElement("div", "usersWrapper");
    this.usersList = this.createElement("ul", "users");

    this.main.appendChild(this.usersWrapper);
    this.main.appendChild(this.usersList);

    this.app.appendChild(this.title);
    this.app.appendChild(this.counter);
    this.app.appendChild(this.container);
    this.app.appendChild(this.main);
  }

  createElement(elementTag, elementClass) {
    const element = document.createElement(elementTag);
    if (elementClass) element.classList.add(elementClass);
    return element;
  }

  createUser(userData) {
    const userElement = this.createElement("li", "user-prev");
    userElement.classList.add("user-render");
    userElement.insertAdjacentHTML(
      "afterbegin",
      `<img width ="75px" class="user-prev-photo" src="${userData.avatar_url}" alt="userData.login">
      <div>
    <span class="user-prev-name">Имя пользователя: ${userData.login}</span><br>
    <span class="repo-prev-name">Репо: ${userData.url}</span>
    </div>`
    );
    this.usersList.appendChild(userElement);
  }
}
