import LoanDecision from '../../services/loanDecision';
import axios from 'axios';
import IBalanceSheet from '../../type/balanceSheet';

jest.mock('axios')

test('Should get preassessment 20 as loan decision', async () => {
    const resp = { data: { approved: true, approvalRate: 20 } };
    (axios.post as jest.Mock).mockResolvedValue(resp);

    const balanceSheets: IBalanceSheet[] = [{
        year: 2020,
        month: 9,
        profitOrLoss: -100,
        assetsValue: 0
    }];
    const preAssessment = await LoanDecision.getLoanDecision(balanceSheets, 'business_1', 10);
    console.log(preAssessment);
})

test('Should get preassessment 60 as loan decision', async () => {
    const resp = { data: { approved: true, approvalRate: 20 } };
    (axios.post as jest.Mock).mockResolvedValue(resp);

    const balanceSheets: IBalanceSheet[] = [{
        year: 2020,
        month: 9,
        profitOrLoss: 10,
        assetsValue: 0
    }];
    const preAssessment = await LoanDecision.getLoanDecision(balanceSheets, 'business_1', 10);
    console.log(preAssessment);
})

test('Should get preassessment 100 as loan decision', async () => {
    const resp = { data: { approved: true, approvalRate: 20 } };
    (axios.post as jest.Mock).mockResolvedValue(resp);

    const balanceSheets: IBalanceSheet[] = [{
        year: 2020,
        month: 9,
        profitOrLoss: 10,
        assetsValue: 20
    }];
    const preAssessment = await LoanDecision.getLoanDecision(balanceSheets, 'business_1', 10);
    console.log(preAssessment);
})