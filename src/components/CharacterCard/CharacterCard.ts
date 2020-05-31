const styles = require('./CharacterCard.scss').toString();

const template = document.createElement('template');
template.innerHTML = `
    <style>${styles}</style>
    <div class="characterCard">
        <img class="characterCard__image" />
        <div class="characterCard__info">
            <h3>Character name</h3>
            <div class="characterCard__hiddenInfo">
              <p> <slot name="species"></slot> </p>
            </div>
        </div>
    </div>
`;

export class Character extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('img');
  }
}
