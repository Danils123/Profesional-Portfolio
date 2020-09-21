export interface ICard {
  name: string;
  descriptions: string;
  url: string;
  images: string[];
  longDescription?: string;
  tags?: string[];
}

export class Card implements ICard {
  constructor(
    public name: string,
    public descriptions: string,
    public url: string,
    public images: string[],
    public longDescription?: string,
    public tags?: string[]
  ) {}
}
