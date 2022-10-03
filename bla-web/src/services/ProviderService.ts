import http from "../http-common";
import IProviderData from "../types/Provider";

const getAll = () => {
  return http.get<Array<IProviderData>>("/providers");
};

const ProviderService = {
  getAll
};


export default ProviderService;