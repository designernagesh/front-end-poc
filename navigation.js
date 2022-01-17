// Steps Components 
const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />

<li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
          </li>`;
       

class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(navTemplate.content.cloneNode(true));
       
        this.shadowRoot.querySelector(".nav-link").innerText = this.getAttribute("linkName");
        this.shadowRoot.querySelector(".nav-link").href = this.getAttribute("navLink");
        this.shadowRoot.querySelector(".nav-link").classList.add = this.getAttribute("linkActiveClass");
    }
}

customElements.define("nav-bar", NavBar);