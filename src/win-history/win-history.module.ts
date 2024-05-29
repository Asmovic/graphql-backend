import { Module } from '@nestjs/common';
import { WinHistoryService } from './win-history.service';
import { WinHistoryResolver } from './win-history.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [WinHistoryResolver, WinHistoryService, PrismaService],
})
export class WinHistoryModule {}
