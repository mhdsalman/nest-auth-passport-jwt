import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";
import { Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {    
    constructor(private readonly userService: UserService) {
        super();
    }

    validate(username: string, password: string): User {
        const user = this.userService.getUserByName(username);
        if(user === undefined) throw new UnauthorizedException();

        if (user && user.password === password) {
            return user;
        } else {
            throw new UnauthorizedException();
        } 
    }
}