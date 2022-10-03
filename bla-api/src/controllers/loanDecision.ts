import { NextFunction, Request, Response } from 'express';
import balanceSheet from '../services/balanceSheet';
import loanDecisionService from '../services/loanDecision';
import IBalanceSheet from '../type/balanceSheet';

const loanDecision = async (req: Request, res: Response, next: NextFunction) => {
    const { provider, business, loanAmount } = req.query
    const result = await balanceSheet.getBalanceSheet(provider, business);
    const sheet: IBalanceSheet[] = result.sheet;

    let data = await loanDecisionService.getLoanDecision(sheet, business, loanAmount);
    return res.status(200).json({
        data
    });

};


export default { loanDecision };