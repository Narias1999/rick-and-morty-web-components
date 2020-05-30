import { ICharacter } from './../../models/Character';

const styles = require('./CharacterList.css').toString();

function characterTemplate(character: ICharacter): String {
  return`
    <style>${styles}</style>
    <character name=${character.name} img=${character.img}>
        <p slot="species">${character.species}</p>
        <p slot="type">${character.type}</p>
    </character>
  `
}

export class CharacterList extends HTMLElement {
  set results(characters: ICharacter[]) {
    this._render(characters);
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  _render(characters: ICharacter[]) {
    this.shadowRoot.innerHTML = characters.map(characterTemplate).join('');
  }
}
