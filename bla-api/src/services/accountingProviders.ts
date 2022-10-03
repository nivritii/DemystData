import providersData from '../repositories/accountingProvider.json';

const getProviders = async function () {
    return providersData;
  }

  export default { getProviders };