import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return user info!', async () => {
      const mockData = {
        name: 'quangtrn',
      };

      const result = await userController.create(mockData.name);

      expect(result.name).toEqual(mockData.name);
    });
  });
});
