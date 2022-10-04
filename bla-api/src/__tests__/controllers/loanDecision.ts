import LoanDecisionController from '../../controllers/loanDecision';
import LoanDecisionService from '../../services/loanDecision';
import BalanceSheetService from '../../services/balanceSheet';
import { NextFunction, Response, Request } from 'express';
import axios from 'axios';

jest.mock('axios')

test('Should get balance sheet from controller', async () => {

    const balanceResp = {
        data: [
            {
                year: 2020,
                month: 1,
                profitOrLoss: 120000,
                assetsValue: 1500
            }
        ]
    };
    const mockBalanceService = jest.spyOn(BalanceSheetService, 'getBalanceSheet')
    mockBalanceService.mockImplementation(async () => await balanceResp);

    const loanDecision = { approved: true, approvalRate: 20 }
    const mockLoanDecisionService = jest.spyOn(LoanDecisionService, 'getLoanDecision')
    mockLoanDecisionService.mockImplementation(async () => await loanDecision);


    const req = {
        query: {
            business: 'business1',
            provider: 'Xero',
            loanAmount: 10000
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

    const result = await LoanDecisionController.loanDecision(req, resp, mockNext);
    expect(result).toStrictEqual({ data: { approved: true, approvalRate: 20 } });
})