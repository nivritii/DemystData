import BalanceSheetService from '../../services/balanceSheet';
import axios from 'axios';

jest.mock('axios')

test('Should get balance sheet for business with respect to provider', async () => {
    const resp = {
        data: [
            {
                year: 2020,
                month: 1,
                profitOrLoss: 120000,
                assetsValue: 1500
            }
        ]
    };
    (axios.get as jest.Mock).mockResolvedValue(resp);
    const balanceSheet = await BalanceSheetService.getBalanceSheet('Xero', 'business_1');
    expect(balanceSheet.length).toBe(1)
    expect(balanceSheet[0].year).toBe(2020)
    expect(balanceSheet[0].month).toBe(1)
    expect(balanceSheet[0].profitOrLoss).toBe(120000)
    expect(balanceSheet[0].assetsValue).toBe(1500)
})