import { Body, Controller, Delete, Param, Post, Put, Query } from "@nestjs/common";
import { PackService } from "./pack.service";
import {ApiProperty} from "@nestjs/swagger";

class PackRequest {
    @ApiProperty()
    userId: number;
    @ApiProperty()
    name: string;
}

@Controller("packs")
export class PackController {
    constructor(private readonly packService: PackService) {}

    @Post()
    async create(@Body() request: PackRequest) {
        const pack = await this.packService.createPack(request.userId, request.name);
        return pack;
    }

    @Put(":id")
    async createPut(@Param("id") id: number, @Query("name") name: string) {
        const pack = await this.packService.updatePack(id, name);
        return pack;
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        const pack = await this.packService.deletePack(id);
        return pack;
    }
}