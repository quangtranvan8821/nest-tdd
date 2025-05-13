import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  it('should be defined', () => {
    expect(userRepository).toBeDefined();
  });

  // Add more tests here as the repository gets implemented
});
