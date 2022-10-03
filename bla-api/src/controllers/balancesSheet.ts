import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import balanceSheet from '../services/balanceSheet';

// getting all balances
const getBalanceSheet = async (req: Request, res: Response, next: NextFunction) => {

    const { provider, business } = req.query;

    const result = await balanceSheet.getBalanceSheet(provider, business);
    return res.status(200).json({
        data: result.sheet
    });

};


export default { getBalanceSheet };