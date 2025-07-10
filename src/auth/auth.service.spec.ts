import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have a signUp method', () => {
    expect(typeof service.signUp).toBe('function');
  });

  it('should have a signIn method', () => {
    expect(typeof service.signIn).toBe('function');
  });

  it('should return success message on signUp', () => {
    expect(service.signUp()).toBe('User signed up successfully');
  });

  it('should return success message on signIn', () => {
    expect(service.signIn()).toBe('User signed in successfully');
  });
});
