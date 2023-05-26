import {Module} from "@nestjs/common";

import {PrismaService} from "../prisma.service";
import {CardController} from "./card.contoller";
import {UserService} from "../user/user.service";
import {CardService} from "./card.service";
import {UserModule} from "../user/user.module";

@Module({
    controllers: [CardController],
    providers: [PrismaService, CardService],
    imports: [UserModule]
})
export class CardModule {}