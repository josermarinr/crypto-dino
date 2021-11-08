import { Query, Resolver } from '@nestjs/graphql';

import { CurrenciesService } from 'src/domain/entities/currencies.service';
import { CoincapService } from 'src/externalServices/coincap/coincap.service';
import { Data } from './models/currencies.model';

@Resolver()
export class QueryResolver {
  constructor(
    private readonly currenciesServices: CurrenciesService,
    private coincapServices: CoincapService,
  ) {}
  @Query(() => Data)
  async currencies() {
    const response = this.currenciesServices.queryCurrencies(50);
    const comment = 'funciona todo';

    return { currencie: response, comment: comment };
  }
}
