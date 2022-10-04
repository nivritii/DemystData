import IBalanceSheet from "../type/balanceSheet";
import config from '../config/config.json';
import axios from 'axios';

const getLoanDecision = async function (sheets: IBalanceSheet[], business: any, loanAmount: any) {

    const overallProfit = sheets.reduce((accumulator: number, sheet: IBalanceSheet) => {
        return accumulator + sheet.profitOrLoss;
    }, 0);

    const overAllAssetValue = sheets.reduce((accumulator: number, sheet: IBalanceSheet) => {
        return accumulator + sheet.assetsValue;
    }, 0);

    const averageAssetsValue = overAllAssetValue / sheets.length;

    const preAssessment = getPreassessmentValue(overallProfit, averageAssetsValue, loanAmount);

    const decisionEngine = config.decisionEngine;
    const res = await axios.post(decisionEngine.endpoint, { business, overallProfit, preAssessment });
    return res.data;

};

const getPreassessmentValue = (overallProfit: number, averageAssetsValue: number, loanAmount: number) => {
    let preAssessment = 20
    if (overallProfit > 0) {
        preAssessment = 60
    }

    if (averageAssetsValue > loanAmount) {
        preAssessment = 100
    }

    return preAssessment;
};

export default { getLoanDecision };