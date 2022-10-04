import BalancesSheetController from '../../controllers/balancesSheet';
import BalancesSheetService from '../../services/balanceSheet';
import { NextFunction, Response, Request } from 'express';

test('Should get balance sheet from controller', async () => {
    const mockService = jest.spyOn(BalancesSheetService, 'getBalanceSheet')
    const balanceSheet = {
        sheet: [
            {
                year: 2020,
                month: 1,
                profitOrLoss: 120000,
                assetsValue: 1500
            }
        ]
    }


    mockService.mockImplementation(async () => await balanceSheet);

    const req = {
        query: {
            provider: 'Xero',
            business: 'business1'
        }
    } as unknown as Request;

    const resp = {
        status: (_status: any) => {
            return {
                json: (data: any) => {
                    return data;
                },
                send: () => {
                    return 'sent';
                }
            };
        }
    } as unknown as Response;

    const mockNext: NextFunction = jest.fn();

    const result = await BalancesSheetController.getBalanceSheet(req, resp, mockNext);
    expect(result).toStrictEqual({ data: [ { year: 2020, month: 1, profitOrLoss: 120000, assetsValue: 1500 } ] });
})