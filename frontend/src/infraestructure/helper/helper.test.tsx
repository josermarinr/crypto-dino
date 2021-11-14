import { Mock } from "../context/Mock";
import { sortDataByPercent } from "./helper";

describe("testing of function to manipulated data", () => {
    it.skip("should return the good order of data", () => {
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
});
