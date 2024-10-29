// player.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player, Inventory } from '@prisma/client';


@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post("register")
  create(@Body("name") name:string, @Body("nickname") nickname: string ): Promise<Player> {
    return this.playerService.create(name, nickname);
  }

  @Get()
  findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
  //   return this.usersService.findOne(id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.usersService.remove(id);
  // }
}
