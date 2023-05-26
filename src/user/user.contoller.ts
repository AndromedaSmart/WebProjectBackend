import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import {ApiProperty} from "@nestjs/swagger";

class RegisterRequest {
    @ApiProperty()
    login: string;
    @ApiProperty()
    password: string;
}

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("signup")
    async signUp(@Body() request: RegisterRequest) {
        const user = await this.userService.signUp(request.login, request.password);
        return user;
    }

    @Post("login")
    async login(@Body() request: RegisterRequest) {
        const user = await this.userService.login(request.login, request.password);
        return user;
    }
}