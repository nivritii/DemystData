import { Request, Response, NextFunction } from 'express';
import businessesService from '../services/businesses';

// getting all businesses
const getBusinesses = async (req: Request, res: Response, next: NextFunction) => {
    
    let data = await businessesService.getBusinesses();
    return res.status(200).json({
        data
    });
};


export default { getBusinesses };