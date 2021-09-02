import { IUser } from './user';

export interface ICategory {
  name: string;
  imgSrc?: string;
  user?: IUser;
  id?: number;
}
