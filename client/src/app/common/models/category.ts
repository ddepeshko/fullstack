import { IUser } from './user';

export interface ICategory {
  name: string;
  imageSrc?: string;
  user?: IUser;
  _id?: number;
}
