import { Character } from './components/CharacterCard/CharacterCard';
import { CharacterList } from './components/CharacterList/CharacterList';
import { Api } from './api/';
import './main.css';

customElements.define('character-card', Character);
customElements.define('character-list', CharacterList);

const api = new Api();
async function init() {
  const main = document.querySelector('main');
  const characters = await api.listCharacters();

  const el = document.createElement('character-list') as CharacterList;
  el.characters = characters;
  main.appendChild(el);
}

init();
