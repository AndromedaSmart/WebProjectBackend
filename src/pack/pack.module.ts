import {Module} from "@nestjs/common";

import {PrismaService} from "../prisma.service";
import {PackController} from "./pack.contoller";
import {UserService} from "../user/user.service";
import {PackService} from "./pack.service";
import {UserModule} from "../user/user.module";

@Module({
    controllers: [PackController],
    providers: [PrismaService, PackService],
    imports: [UserModule]
})
export class PackModule {}