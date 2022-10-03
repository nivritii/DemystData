import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import accountingProvidersService from '../services/accountingProviders';

// getting all providers
const getProviders = async (req: Request, res: Response, next: NextFunction) => {
    
    let data = await accountingProvidersService.getProviders();
    return res.status(200).json({
        data
    });
};


export default { getProviders };