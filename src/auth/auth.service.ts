import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(body: {
    email: string;
    password: string;
    name: string;
    lastName: string;
  }) {
    // Logic for user sign-up can be implemented here
    await this.prisma.user.create({
      data: {
        email: body.email,
        hash: body.password, // In a real application, ensure to hash the password
        name: body.name,
        lastName: body.lastName,
      },
    });
    return 'User signed up successfully';
  }

  signIn() {
    // Logic for user sign-in can be implemented here
    return 'User signed in successfully';
  }
}
