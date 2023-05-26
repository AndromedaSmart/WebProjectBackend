import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import {UserService} from "../user/user.service";


@Injectable()
export class PackService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) {}

    async createPack(userId: number, name: string) {
        const user = await this.userService.getUserById(userId);

        if (!user) {
            return null;
        }

        const pack = await this.prisma.pack.create({
            data: { name, user: { connect: { id: userId } } },
        });

        return pack;
    }

    async updatePack(id: number, name: string) {
        const pack = await this.prisma.pack.update({
            where: { id },
            data: { name },
        });

        return pack;
    }

    async deletePack(id: number) {
        const pack = await this.prisma.pack.delete({ where: { id } });
        return pack;
    }
}