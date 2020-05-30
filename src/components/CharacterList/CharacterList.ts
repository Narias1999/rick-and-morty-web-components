import { ICharacter } from './../../models/Character';

const styles = require('./CharacterList.css').toString();

function characterTemplate(character: ICharacter): String {
  return`
    <style>${styles}</style>
    <character-card name=${character.name} img=${character.image}>
        <p slot="species">${character.species}</p>
        <p slot="type">${character.type}</p>
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
    this.shadowRoot.innerHTML = characters.map(characterTemplate).join('');
  }
}
