import { Field, ObjectType } from '@nestjs/graphql';
import { Currencie } from './currencie';

@ObjectType()
export class Data {
  @Field((type) => [CurrenciesModel], { nullable: true })
  currencie: Currencie[];

  @Field()
  comment: string;
}

@ObjectType()
export class CurrenciesModel {
  @Field({ nullable: true })
  id: string;
  @Field({ nullable: true })
  rank: string;
  @Field({ nullable: true })
  symbol: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  supply: string;
  @Field({ nullable: true })
  maxSupply: string;
  @Field({ nullable: true })
  marketCapUsd: string;
  @Field({ nullable: true })
  volumeUsd24Hr: string;
  @Field({ nullable: true })
  priceUsd: string;
  @Field({ nullable: true })
  changePercent24Hr: string;
  @Field({ nullable: true })
  vwap24Hr: string;
}
