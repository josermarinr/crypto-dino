import { Module } from '@nestjs/common';
import { CurrenciesService } from 'src/domain/entities/currencies.service';
import { CoincapService } from 'src/externalServices/coincap/coincap.service';
import { QueryResolver } from './query';

@Module({
  imports: [],
  providers: [QueryResolver, CurrenciesService, CoincapService],
})
export class ResolverModule {}
