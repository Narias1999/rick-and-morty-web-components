import { Character } from './components/CharacterCard/CharacterCard';
import { CharacterList } from './components/CharacterList/CharacterList';
import { Api } from './api/';

console.log('Hola :)')

customElements.define('character-card', Character);
customElements.define('character-list', CharacterList);

const api = new Api();

api.listCharacters().then(console.log);
