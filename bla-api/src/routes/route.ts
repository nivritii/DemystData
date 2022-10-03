import express from 'express';
import balanceSheetController from '../controllers/balancesSheet';
import businessesController from '../controllers/businesses';
import accountingProvidersController from '../controllers/accountingProviders';
import loanDecisionController from '../controllers/loanDecision';
const router = express.Router();

router.get('/balance', balanceSheetController.getBalanceSheet);
router.get('/businesses', businessesController.getBusinesses);
router.get('/providers', accountingProvidersController.getProviders);
router.get('/loanDecision', loanDecisionController.loanDecision);

export = router;