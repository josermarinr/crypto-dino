import { Injectable } from '@nestjs/common';
import { CoincapService } from './../..//externalServices/coincap/coincap.service';
import { Currencies } from './../../interface/currenciesInterface';

@Injectable()
export class CurrenciesService {
  private currencies: Currencies[] = [];
  constructor(private coincapServices: CoincapService) {}

  getCurrencies() {
    return this.currencies;
  }

  dataToCurrencies(data: Currencies[]) {
    this.currencies = data;

    return this.currencies;
  }

  async queryCurrencies(maxSize: number): Promise<Currencies[]> {
    return (await this.coincapServices.getAll())[0].data.slice(0, maxSize);
  }

  async queryCurrencie(currencie: string): Promise<Currencies> {
    const data = await this.coincapServices.getOneCrypt(currencie);
    return data[0].data;
  }

  queryPrice() {
    return this.coincapServices.currentPrice_sockets();
  }
}
