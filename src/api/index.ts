import { ICharacter } from './../models/Character';

export class Api {
  private baseURL = 'https://rickandmortyapi.com/api/';
  constructor() {

  }

  private async get(resource: String): Promise<any> {
    const data = await fetch(this.baseURL + resource);
    return data.json();
  }

  async listCharacters(): Promise<ICharacter[]> {
    const data = await this.get('character');
    return data.results;
  }
}
