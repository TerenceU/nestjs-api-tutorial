import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dtos';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // Constructor logic can be added here if needed
  }

  @Post('sign-up')
  @ApiBody({ type: AuthDto })
  signUp(
    @Body()
    body: AuthDto,
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
