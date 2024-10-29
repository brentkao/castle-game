// player.interface.ts
export interface Player {
  userId: number;
  name: string;
  nickname: string;
  level: number;
  experience: number;
  coin: number;
  totalCoin: number;
  diamond: number;
  totalDiamond: number;
  energy: number;
  createdAt: Date;
}
