import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmentController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentController();

appointmentsRouter.use(ensureAuthentication);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
