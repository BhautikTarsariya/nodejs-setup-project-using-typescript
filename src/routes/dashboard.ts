import { Router, Request, Response } from 'express';
import * as DashboardController from '../controllers/dashboard';
import { IResponse } from '../types/iResponse';
import { parseError } from '../utils/helper';

const router: Router = Router();

router.get('/dashboard', async (req: Request, res: Response) => {
    let ApiResponse: IResponse = { code: 200, data: '' };
    try {
        ApiResponse.code = 200;
        ApiResponse.data = await DashboardController.readDashboard();
    } catch (error) {
        ApiResponse = parseError(error);
    } finally {
        res.status(ApiResponse.code).send(ApiResponse.data);
    }
});