import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constant';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    const token  = this.authService.generateToken(req.user);
    return token;
  }


  @Get('/employee')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.EMPLOYEE))
  getEmployee(): string {
    return 'Get employee';
  }


  @Get('/business-man')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.BUSINESS_MAN))
  getBusinessMan(): string {
    return 'Get Business Man';
  }
}
