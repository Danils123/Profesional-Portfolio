export interface ICard {
  name: string;
  descriptions: string;
  url: string;
  image: string;
  longDescription?: string;
}

export class Card implements ICard {
  constructor(
    public name: string,
    public descriptions: string,
    public url: string,
    public image: string,
    public longDescription?: string
  ) {}
}
