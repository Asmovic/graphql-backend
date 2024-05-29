import { Test, TestingModule } from '@nestjs/testing';
import { WinHistoryService } from './win-history.service';

describe('WinHistoryService', () => {
  let service: WinHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WinHistoryService],
    }).compile();

    service = module.get<WinHistoryService>(WinHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
