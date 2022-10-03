import businessData from '../repositories/businesses.json';

const getBusinesses = async function () {
    return businessData;
  }

  export default { getBusinesses };