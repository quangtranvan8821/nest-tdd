import { randomUUID } from 'crypto';

export class UserEntity {
  id: string;
  name: string;
  createdAt: Date;

  constructor(name: string) {
    this.id = randomUUID() as string;
    this.name = name;
    this.createdAt = new Date();
  }
}
