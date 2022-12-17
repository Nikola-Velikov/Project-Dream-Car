export interface offer {
  _id: string;

  model: string;

  city: string;

  madeIn: string;

  imageUrl: string;

  year: number;

  seats: number;

  price: number;

  description: string;

  owner: string;

  color: string;
  favorited: any[];
  __v: number;
}
