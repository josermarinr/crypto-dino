import { Injectable } from '@nestjs/common';
import { CoincapService } from 'src/externalServices/coincap/coincap.service';
import { Currencies } from 'src/interface/currenciesInterface';

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

  queryCurrencies() {
    const data = this.coincapServices.getAll();

    if (data !== undefined) {
      const result = data;
      //this.dataToCurrencies(result);
      return result;
    }
  }
}
