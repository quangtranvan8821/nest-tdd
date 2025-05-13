import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  // eslint-disable-next-line @typescript-eslint/require-await
  async create(name: string): Promise<UserEntity> {
    const user = new UserEntity(name);

    console.log('user', user);

    return user;
  }
}
