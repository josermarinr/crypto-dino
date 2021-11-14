import { Mock } from "../mocks/CurrenciesMock";
import { sortDataByPercent, sortDataByPrice } from "./helper";

describe("testing of function to manipulated data", () => {
    it("should return the good order of data", () => {
        //given
        const dataMock = Mock;
        const data = sortDataByPercent(dataMock.data.currencie)?.slice(0, 3);
        //when
        const expectedResult = [
            {
                id: "iotex",
                rank: "77",
                symbol: "IOTX",
                name: "IoTeX",
                supply: "9540779324.3078800000000000",
                maxSupply: "10000000000.0000000000000000",
                marketCapUsd: "2179607559.7101779950201017",
                volumeUsd24Hr: "1135212047.4094245443324717",
                priceUsd: "0.2284517318367275",
                changePercent24Hr: "16.7239741242228032",
                vwap24Hr: "0.2333791126760336",
            },
            {
                id: "loopring",
                rank: "49",
                symbol: "LRC",
                name: "Loopring",
                supply: "1328247994.5767503000000000",
                maxSupply: "1374513896.0000000000000000",
                marketCapUsd: "4148798186.0397080650405527",
                volumeUsd24Hr: "1391098425.7164661404431035",
                priceUsd: "3.1235117259572701",
                changePercent24Hr: "15.0194996217582693",
                vwap24Hr: "2.9331445311580421",
            },
            {
                id: "avalanche",
                rank: "13",
                symbol: "AVAX",
                name: "Avalanche",
                supply: "220286577.2075511200000000",
                maxSupply: "720000000.0000000000000000",
                marketCapUsd: "21040063006.0674224412821405",
                volumeUsd24Hr: "1192454086.1139644045973063",
                priceUsd: "95.5122335313410921",
                changePercent24Hr: "8.5223515774207243",
                vwap24Hr: "96.1249517338770315",
            },
        ];
        //then
        expect(data).toStrictEqual(expectedResult);
    });
    it("should return the good by price", () => {
        //given
        const dataMock = Mock;
        const data = sortDataByPrice(dataMock.data.currencie)?.slice(0, 3);
        //when
        const expectedResult = [
            {
                id: "huobi-btc",
                rank: "69",
                symbol: "HBTC",
                name: "Huobi BTC",
                supply: "39884.0822047400000000",
                maxSupply: "6910.0000000000000000",
                marketCapUsd: "2585880545.6350677983149973",
                volumeUsd24Hr: "113209.2655064809580997",
                priceUsd: "64834.9016121461700496",
                changePercent24Hr: "1.3585890850351656",
                vwap24Hr: "64954.3501060751337232",
            },
            {
                id: "wrapped-bitcoin",
                rank: "17",
                symbol: "WBTC",
                name: "Wrapped Bitcoin",
                supply: "239132.0815507100000000",
                maxSupply: null,
                marketCapUsd: "15446449182.0536042162670279",
                volumeUsd24Hr: "80375769.4826317210731060",
                priceUsd: "64593.7972098405071582",
                changePercent24Hr: "1.3336625189015128",
                vwap24Hr: "64606.0137979338039665",
            },
            {
                id: "bitcoin",
                rank: "1",
                symbol: "BTC",
                name: "Bitcoin",
                supply: "18872887.0000000000000000",
                maxSupply: "21000000.0000000000000000",
                marketCapUsd: "1218440263681.3688589874323307",
                volumeUsd24Hr: "15611621583.4937683766408516",
                priceUsd: "64560.3538918750935661",
                changePercent24Hr: "1.3687292697729605",
                vwap24Hr: "64670.7428644885166534",
            },
        ];
        //then
        expect(data).toStrictEqual(expectedResult);
    });
});
