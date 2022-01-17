const API_URL = "assets/imageData.json";
const parentContainer = document.getElementById("shopByCategory");
const redirectUrl = "https://www.tumi.com/c/";
const template = document.createElement("template");
template.innerHTML = `
  <style>
  @import "./css/image-gallery.css";
  </style>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 `;

class ImageGallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    fetchUsers().then((users) => {
      users.images.map((item) => {
        let anchor = document.createElement("a");
        anchor.href = `${redirectUrl} + ${item.name}`;
        let image = document.createElement("img");
        image.src = item.src;
        image.alt = item.name;
        let para = document.createElement("p");
        para.innerText = item.name;
        anchor.append(image, para);
        this.shadowRoot.appendChild(anchor);
      });
    });
    async function fetchUsers() {
      const response = await fetch(API_URL);
      const users = await response.json();
      return users;
    }
  }
}

customElements.define("image-gallery", ImageGallery);
