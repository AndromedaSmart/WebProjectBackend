import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import {JwtService} from "@nestjs/jwt";



@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService,
        private jwtService: JwtService,
        private userService: UserService,


    ) {}

    async signUp(login: string, password: string) {
        const user = await this.prisma.user.create({ data: { login, password } });
        return user;
    }

    async login(login: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { login } });

        if (!user || user.password !== password) {
            return null;
        }

        const payload = { sub: user.id, login: user.login };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async getUserById(userId: number) {
        return this.prisma.user.findUnique({where: {id: userId}});
    }


}