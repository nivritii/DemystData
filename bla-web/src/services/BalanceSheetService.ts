import http from "../http-common";
import IBalanceSheetData from "../types/BalanceSheet";

const getBalanceByBusinessByProvider = (business: string, provider: string) => {
  return http.get<Array<IBalanceSheetData>>(`/balance?provider=${provider}&business=${business}`);
};

const BusinessService = {
    getBalanceByBusinessByProvider
};


export default BusinessService;