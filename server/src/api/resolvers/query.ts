import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CurrenciesService } from './../../domain/entities/currencies.service';
import { CurrenciesModel, Data } from './models/currencies.model';
import { Prices } from './models/currencies.model';

const pubSub = new PubSub();
@Resolver()
export class QueryResolver {
    constructor(private readonly currenciesServices: CurrenciesService) {}
    @Query(() => Data)
    async currencies() {
        const size = 150;
        const response = this.currenciesServices.queryCurrencies(size);

        return { currencie: response, size: size };
    }

    @Query(() => CurrenciesModel)
    async currencie(@Args('crypto', { type: () => String }) crypto: string) {
        const response = this.currenciesServices.queryCurrencie(crypto);

        return response;
    }

    @Subscription(() => Prices)
    currentPrice() {
        const payload = this.currenciesServices.queryPrice();
        return pubSub.publish('price', payload);
    }
}
