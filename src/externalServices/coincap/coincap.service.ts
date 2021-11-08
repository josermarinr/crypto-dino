import axios, { AxiosRequestConfig } from 'axios';
import {
  CoincapData,
  CoincapDataTable,
} from './../../interface/coincapDataInterface';

export class CoincapService {
  async getAll(): Promise<[CoincapDataTable, number]> {
    const config: AxiosRequestConfig<any> = {
      method: 'get',
      url: 'https://api.coincap.io/v2/assets/',
      headers: {
        Authorization: `Bearer ${process.env.COINCAP_KEY}`,
      },
    };

    const { data, status } = await axios(config);

    return [data as CoincapDataTable, status];
  }

  async getOneCrypt(id: string): Promise<[CoincapData, number]> {
    const config: AxiosRequestConfig<any> = {
      method: 'get',
      url: `https://api.coincap.io/v2/assets/${id}/`,
      headers: {
        Authorization: `Bearer ${process.env.COINCAP_KEY}`,
      },
    };

    const { data, status } = await axios(config);

    return [data as CoincapData, status];
  }

  currentPrice_sockets() {
    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');
    return { pricesWs };
  }
}
