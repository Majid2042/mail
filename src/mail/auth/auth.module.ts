import { Module } from '@nestjs/common';
//import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailModule } from '../mail.module';

@Module({
  imports: [MailModule], // 📧
  controllers: [],
  providers: [AuthService],
})
export class AuthModule {}