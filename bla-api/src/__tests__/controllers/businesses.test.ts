import BusinessesController from '../../controllers/businesses';
import BusinessesService from '../../services/businesses';
import { NextFunction, Response } from 'express';

test('Should get providers from controller', async () => {
    const mockService = jest.spyOn(BusinessesService, 'getBusinesses')
    const businessData = [
        {
            id: 1,
            name: 'business 1',
            year: 2020
        },
        {
            id: 2,
            name: 'business 2',
            year: 2021
        }
    ];
    
    mockService.mockImplementation(async () => await businessData);

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

    const result =  await BusinessesController.getBusinesses(mockReq, resp, mockNext);
    expect(result).toStrictEqual({
        data: [
            { id: 1, name: 'business 1', year: 2020 },
            { id: 2, name: 'business 2', year: 2021 }
          ]
        });
})