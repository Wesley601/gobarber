import { EntityRepository, Repository } from 'typeorm'

import Appointment from '../models/Appointment'

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
  public async findByDate (date: Date): Promise<Appointment | undefined> {
    const appointment = await this.findOne({
      where: { date }
    })

    return appointment
  }
}

export default AppointmentRepository
