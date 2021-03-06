import { ICharacter } from './../../models/Character';

const styles = require('./CharacterList.scss').toString();

function characterTemplate(character: ICharacter): String {
  return`
    <character-card name=${character.name} img=${character.image}>
        <span slot="species">${character.species}</span>
    </character-card>
  `
}

export class CharacterList extends HTMLElement {
  set characters(characters: ICharacter[]) {
    this._render(characters);
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  _render(characters: ICharacter[]) {
    this.shadowRoot.innerHTML = `
    <style>${styles}</style>
    <div>
      ${characters.map(characterTemplate).join('')}
    </div>
    `;
  }
}
