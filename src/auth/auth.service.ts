import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dtos';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(body: AuthDto) {
    if (!body?.email || !body?.password) {
      throw new BadRequestException(
        'Email and password are required for sign-up',
      );
    }

    await this.prisma.user.create({
      data: {
        email: body?.email,
        hash: body.password,
        name: body?.name,
        lastName: body?.lastName,
      },
    });

    return 'User signed up successfully';
  }

  async signIn() {
    const user: any = await this.prisma.user.findUnique({
      where: {
        email: 'string',
      },
    });
    return `User signed in successfully: ${JSON.stringify(user)}`;
  }
}
