import { container } from 'tsyringe';

import '@modules/users/providers/index';
import './providers/index';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokens from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepositories from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUserTokens>(
  'UserTokensRepository',
  UserTokensRepositories
);
