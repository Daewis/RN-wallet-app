import express from 'express';

import {getTransactionsByUserId} from '../controllers/transactionsController.js';
import {createTransactions} from '../controllers/transactionsController.js';
import {deleteTransactions} from '../controllers/transactionsController.js';
import {getSummaryByUserId} from '../controllers/transactionsController.js';

const router = express.Router();

router.get('/:userId', getTransactionsByUserId);
router.post('/', createTransactions);
router.delete('/:id', deleteTransactions);
router.get('/summary/:userId', getSummaryByUserId);



export default router