import axios, { AxiosRequestConfig } from 'axios';
import { coincapData } from 'src/interface/coincapDataInterface';

export class CoincapService {
  async getAll(): Promise<coincapData> {
    const config: AxiosRequestConfig<any> = {
      method: 'get',
      url: 'https://api.coincap.io/v2/assets/',
      headers: {
        Authorization: `Bearer ${process.env.COINCAP_KEY}`,
      },
    };

    const { data, status } = await axios(config);

    return data as coincapData;
  }
}
