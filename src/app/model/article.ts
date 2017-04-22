import { User } from './user';

export interface Article {
  author: User;
  createdAt: string;
  title: string;
  category: string;
  body: string;
}
