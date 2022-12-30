import { Global, Module } from '@nestjs/common';

import { LocalStrategy } from 'src/auth/local.strategy';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Global()
@Module({
    providers: [UsersService, LocalStrategy],
    exports: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
