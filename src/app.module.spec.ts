import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import { UserModule } from './user/user.module';

describe('AppModule', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should import UserModule', () => {
    const userModule = app.get(UserModule);
    expect(userModule).toBeDefined();
  });

  it('should provide AppService', () => {
    const appService = app.get(AppService);
    expect(appService).toBeDefined();
  });

  it('should provide AppController', () => {
    const appController = app.get(AppController);
    expect(appController).toBeDefined();
  });
});
