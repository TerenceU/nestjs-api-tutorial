import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // Constructor logic can be added here if needed
  }

  @Post('sign-up')
  signUp(
    @Body()
    body: {
      email: string;
      password: string;
      name: string;
      lastName: string;
    },
  ) {
    // Logic for user sign-up can be implemented here
    return this.authService.signUp(body);
  }

  @Post('sign-in')
  signIn() {
    // Logic for user sign-in can be implemented here
    return this.authService.signIn();
  }
}
