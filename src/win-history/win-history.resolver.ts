import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WinHistoryService } from './win-history.service';
import { CreateWinHistoryInput, UpdateWinHistoryInput } from 'src/types/graphql';

@Resolver('WinHistory')
export class WinHistoryResolver {
  constructor(private readonly winHistoryService: WinHistoryService) {}

  @Mutation('createWinHistory')
  create(@Args('createWinHistoryInput') createWinHistoryInput: CreateWinHistoryInput) {
    return this.winHistoryService.create(createWinHistoryInput);
  }

  @Query('winHistorys')
  findAll() {
    return this.winHistoryService.findAll();
  }

  @Query('winHistory')
  findOne(@Args('id') id: number) {
    return this.winHistoryService.findOne(id);
  }

  @Mutation('updateWinHistory')
  update(@Args('updateWinHistoryInput') updateWinHistoryInput: UpdateWinHistoryInput) {
    return this.winHistoryService.update(updateWinHistoryInput.id, updateWinHistoryInput);
  }

  @Mutation('removeWinHistory')
  remove(@Args('id') id: number) {
    return this.winHistoryService.remove(id);
  }
}
