import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Card } from "@prisma/client";

@Injectable()
export class CardService {
    constructor(private readonly prisma: PrismaService) {}

    async createCard(cardData: Card) {
        const card = await this.prisma.card.create({
            data: {
                ruWord: cardData.ruWord,
                enWord: cardData.enWord,
                pack: { connect: { id: cardData.packId } },
            },
        });

        return card;
    }

    async getCardById(id: number) {
        const card = await this.prisma.card.findUnique({ where: { id: id } });
        return card;
    }

    async updateCard(id: number, cardData: Card) {
        const card = await this.prisma.card.update({
            where: { id: id },
            data: {
                ruWord: cardData.ruWord,
                enWord: cardData.enWord,
                pack: { connect: { id: cardData.packId } },
            },
        });

        return card;
    }

    async deleteCard(id: number) {
        const card = await this.prisma.card.delete({ where: { id: id } });
        return card;
    }
}
