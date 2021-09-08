import { IUser } from '@models/user';

export interface IPositions {
  name: string;
  cost: number;
  user?: IUser;
  category: string;
  _id?: string;
}
