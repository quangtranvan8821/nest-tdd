import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let repo: Partial<Record<keyof UserRepository, jest.Mock>>;

  beforeEach(async () => {
    repo = {
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: repo,
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  describe('create', () => {
    it('should return user info!', async () => {
      const dto = { name: 'quangtrn' };
      const userEntity = { id: 1, ...dto };

      repo.create?.mockReturnValue(userEntity);

      const result = await userController.create(dto.name);

      console.log('result', result);

      // expect(repo.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(userEntity);
    });
  });
});
