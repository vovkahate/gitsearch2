import { Render } from "./render.js";

class Search {
  constructor(render) {
    this.render = render;
    this.render.input.addEventListener("keyup", () => this.searchUsers(this));
  }

  async searchUsers() {
    return await fetch(
      `https://api.github.com/search/users?q=${this.render.input.value}&per_page=5`
    ).then((res) => {
      if (res.ok) {
        res
          .json()
          .then((res) =>
            res.items.forEach((element) => this.render.createUser(element))
          );
      } else {
        /* тут обрабокта ошибки */
      }
    });
  }
}

new Search(new Render());
