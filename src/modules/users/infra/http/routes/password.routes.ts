import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPassowordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const sessionController = new ForgotPasswordController();
const resetPasswordController = new ResetPassowordController();

passwordRouter.post('/forgot', sessionController.create);
passwordRouter.post('/reser', resetPasswordController.create);

export default passwordRouter;
