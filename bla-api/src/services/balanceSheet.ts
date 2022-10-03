import config from '../config/config.json';
import axios from 'axios';

const getBalanceSheet = async function (provider: any, business: any) {

  try{
    const _provider: string = provider;
    if (_provider === 'Xero' || _provider === 'MYOB') {
      const thirdParty = config.accountProviders[_provider]
      const res = await axios.get(thirdParty.endpoint+business)
      console.log(res.data);
        return res.data
    } 
  } catch (e) {
    console.error(e)
    throw Error('Error while getting data')
  }
}

export default { getBalanceSheet };