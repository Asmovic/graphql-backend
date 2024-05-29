import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateWinHistoryInput,
  UpdateWinHistoryInput,
} from 'src/types/graphql';

@Injectable()
export class WinHistoryService {
  constructor(private prisma: PrismaService) {}
  create({ status, reference, amount, cashtokenId }: CreateWinHistoryInput) {
    return this.prisma.winHistory.create({
      data: { status, reference, amount, cashtokenId },
    });
  }

  findAll() {
    return this.prisma.winHistory.findMany();
  }

  findOne(id: number) {
    return this.prisma.winHistory.findUnique({
      where: { id },
      select: {
        id: true,
        status: true,
        reference: true,
        amount: true,
        cashtokenId: true,
      },
    });
  }

  update(
    id: number,
    { status, reference, amount, cashtokenId }: UpdateWinHistoryInput,
  ) {
    return this.prisma.winHistory.update({
      where: { id },
      data: {
        status,
        reference,
        amount,
        cashtokenId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.winHistory.delete({ where: { id } });
  }
}
