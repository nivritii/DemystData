import AccountingProvidersController from '../../controllers/accountingProviders';
import AccountingProvidersService from '../../services/accountingProviders';
import { NextFunction, Response } from 'express';

test('Should get providers from controller', async () => {
    const mockService = jest.spyOn(AccountingProvidersService, 'getProviders')
    const providersData = [
        {
            id: 1,
            name: 'Xero'
        },
        {
            id: 2,
            name: 'MYOB'
        }
    ];
    
    mockService.mockImplementation(async () => await providersData);

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
    const mockReq: any = jest.mocked<typeof Request>(jest.fn())
    const mockNext: NextFunction = jest.fn();

    const result =  await AccountingProvidersController.getProviders(mockReq, resp, mockNext);
    expect(result).toStrictEqual({ data: [ { id: 1, name: 'Xero' }, { id: 2, name: 'MYOB' } ] });
})