import {Module} from "@nestjs/common";

import {PrismaService} from "../prisma.service";
import {UserController} from "./user.contoller";
import {UserService} from "./user.service";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {jwtConstants} from "../auth/constants";

@Module({
    controllers: [UserController],
    providers: [PrismaService, UserService, JwtService],
    imports: [JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
    })],
})
export class UserModule {
}