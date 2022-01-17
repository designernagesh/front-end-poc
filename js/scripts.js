// Steps Components 
const BannerTemplate = document.createElement('template');
BannerTemplate.innerHTML = `
  <link rel="stylesheet" href="../css/styles.css" />
    
<div class="banner">
<a class="click-area" href="#">&nbsp;</a>
<div class="copyBlock">
    <h1></h1>
    <h2></h2>
    <a class="cta" href=""></a>
</div>
<p class="tagline"></p>
</div>`;

class HeroBanner extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(BannerTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector(".banner").style.backgroundImage = this.getAttribute("backgroundImage");
        this.shadowRoot.querySelector("a.click-area").href = this.getAttribute("clickAreaLinkText");
        this.shadowRoot.querySelector("h1").innerText = this.getAttribute("heading");
        this.shadowRoot.querySelector("h2").innerText = this.getAttribute("subText");
        this.shadowRoot.querySelector("a.cta").innerText = this.getAttribute("btnText");
        this.shadowRoot.querySelector("a.cta").href = this.getAttribute("linkText");
        this.shadowRoot.querySelector("p.tagline").innerText = this.getAttribute("tagline");
    }
}

customElements.define("hero-banner", HeroBanner);