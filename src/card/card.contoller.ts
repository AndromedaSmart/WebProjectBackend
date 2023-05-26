import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { ApiProperty } from "@nestjs/swagger";

class CardRequest {
    @ApiProperty()
    ruWord: string;
    @ApiProperty()
    enWord: string;
    @ApiProperty()
    packId: number;
}

@Controller("cards")
export class CardController {
    constructor(private readonly prisma: PrismaService) {}

    @Post()
    async create(@Body() request: CardRequest) {
        const card = await this.prisma.card.create({
            data: {
                ruWord: request.ruWord,
                enWord: request.enWord,
                pack: { connect: { id: request.packId } },
            },
        });

        return card;
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        const card = await this.prisma.card.findUnique({ where: { id: parseInt(id) } });
        return card;
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() request: CardRequest) {
        const card = await this.prisma.card.update({
            where: { id: id },
            data: {
                ruWord: request.ruWord,
                enWord: request.enWord,
                pack: { connect: { id: request.packId } },
            },
        });

        return card;
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        const card = await this.prisma.card.delete({ where: { id: id } });
        return card;
    }
}