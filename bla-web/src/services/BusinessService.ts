import http from "../http-common";
import IBusinessData from "../types/Business";

const getAll = () => {
  return http.get<Array<IBusinessData>>("/businesses");
};

const BusinessService = {
  getAll
};


export default BusinessService;