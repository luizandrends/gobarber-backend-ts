import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123131',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123131');
  });

  it('should not able to create two appointments in the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository
    );

    const appointmentDate = new Date(2020, 7, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123131',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123123131',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
