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

  it('should throw BadRequestException if email or password is missing on signUp', async () => {
    await expect(service.signUp({ email: '', password: '' })).rejects.toThrow(
      'Email and password are required for sign-up',
    );
  });

  it('should return success message on signUp', async () => {
    const response = await service.signUp({
      email: '',
      password: 'testPassword',
      name: 'Test',
      lastName: 'User',
    });
    expect(response).toBe('User signed up successfully');
  });

  it('should return success message on signIn', () => {
    expect(service.signIn()).toBe('User signed in successfully');
  });
});
