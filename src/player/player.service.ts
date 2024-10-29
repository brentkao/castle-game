// player.service.ts
import { Injectable, Inject } from '@nestjs/common';
// import { Player } from './player.entity';
// import { Inventory } from './inventory.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { PrismaService } from '../libs/prisma.service';
import { Player, Inventory } from '@prisma/client';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Player[]> {
    return this.prisma.player.findMany({
      select: {
        userId: true,
        name: true,
        nickname: true,
        level: true,
        experience: true,
        coin: true,
        totalSpentCoin: true,
        diamond: true,
        totalSpentDiamond: true,
        energy: true,
        createdAt: true,
        inventory: true,
      },
    });
  }

  async create(name: string, nickname: string): Promise<Player> {
    return await this.prisma.$transaction(async (tx) => {
      const result = tx.player.create({
        data: {
          name: name,
          nickname: nickname,
          inventory: {
            create: [
              { itemName: 'Health Potion', quantity: 10 },
              { itemName: 'Mana Potion', quantity: 5 },
              { itemName: 'Sword', quantity: 1 },
            ],
          },
        },
      });
      // 3. 返回包含初始背包的玩家物件
      return result;
    });
  }

  //! ==================== 以下是範例程式碼 ====================
  // private players: Player[] = [];
  // private nextId = 1;

  // /** 新增玩家 */
  // createPlayer(name: string, nickname: string): Player {
  //   const player: Player = {
  //     userId: this.nextId++,
  //     name,
  //     nickname: nickname || `Player${this.nextId}`,
  //     level: 1,
  //     experience: 0,
  //     coin: 0,
  //     totalCoin: 0,
  //     diamond: 0,
  //     totalDiamond: 0,
  //     energy: 100,
  //     createdAt: new Date(),
  //   };
  //   this.players.push(player);
  //   return player;
  // }

  // /** 透過 ID 取得玩家 */
  // getPlayerByUserId(userId: number): Player | undefined {
  //   return this.players.find((player) => player.userId === userId);
  // }

  // /** 取得所有玩家 */
  // getAllPlayers(): Player[] {
  //   return this.players;
  // }

  // /** 更新玩家能量 */
  // updatePlayerEnergy(userId: number, energy: number): Player | undefined {
  //   const player = this.getPlayerByUserId(userId);
  //   if (player) {
  //     player.energy = energy;
  //   }
  //   return player;
  // }

  // /** 刪除玩家 */
  // deletePlayer(userId: number): boolean {
  //   const index = this.players.findIndex((player) => player.userId === userId);
  //   if (index !== -1) {
  //     this.players.splice(index, 1);
  //     return true;
  //   }
  //   return false;
  // }
}
