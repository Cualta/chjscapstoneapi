import * as _ from 'lodash';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username, pass) {
    const user = await this.usersService.findOne(username);
    if (!_.isEmpty(user) && user.password === pass) {
      const copyUser = _.cloneDeep(user);
      delete copyUser.password;
      return copyUser;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      userId: user.userId,
      ROLES: user.ROLES,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
