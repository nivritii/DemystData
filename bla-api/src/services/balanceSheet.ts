import config from '../config/config.json';
import axios from 'axios';

const getBalanceSheet = async function (provider: any, business: any) {

    const _provider: string = provider;
    if (_provider === 'Xero' || _provider === 'MYOB') {
      const thirdParty = config.accountProviders[_provider]
      const res = await axios.get(thirdParty.endpoint+business)
        return res.data
    } 
}

export default { getBalanceSheet };