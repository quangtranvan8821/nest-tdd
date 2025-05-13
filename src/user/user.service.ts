import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  // eslint-disable-next-line @typescript-eslint/require-await
  async create(name: string) {
    const user = {
      id: randomUUID(),
      name,
      createdAt: new Date().toISOString(),
    };

    return user;
  }
}
