import { User } from './User';

export interface Group {
  id: string;
  name: string;
  description: string;
  members?: User[];
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
}