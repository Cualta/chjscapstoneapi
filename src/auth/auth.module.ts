import { Global, Module } from '@nestjs/common';
import constantInitiate, { JWT_SECRET_KEY } from 'src/constantInitiate';

import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

constantInitiate();
@Global()
@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '7d' },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
