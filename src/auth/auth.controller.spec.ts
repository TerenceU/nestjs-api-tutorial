import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have a signUp method', () => {
    expect(typeof controller.signUp).toBe('function');
  });

  it('should have a signIn method', () => {
    expect(typeof controller.signIn).toBe('function');
  });

  it('should return success message on signIn', () => {
    expect(controller.signIn()).toBe('User signed in successfully');
  });
});
