import { Test, TestingModule } from '@nestjs/testing';
import { WinHistoryResolver } from './win-history.resolver';
import { WinHistoryService } from './win-history.service';

describe('WinHistoryResolver', () => {
  let resolver: WinHistoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WinHistoryResolver, WinHistoryService],
    }).compile();

    resolver = module.get<WinHistoryResolver>(WinHistoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
