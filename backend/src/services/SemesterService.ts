import { inject } from 'inversify'
import { IIntervalOfExamsDto } from '../domain/interfaces/contracts/IIntervalOfExamsDto'
import { ISemester } from '../domain/interfaces/entities/ISemester'
import { SemesterRepository } from '../repositories/SemesterRepository'
import { AbstractService } from './AbstractService'

export class CurrentsemesterService extends AbstractService<ISemester, SemesterRepository> {
  constructor (
    @inject(SemesterRepository)
    protected readonly currentSemesterRepository: SemesterRepository
  ) { super(currentSemesterRepository) }

  // intervalExam = async (): Promise<IIntervalOfExamsDto[]> => {
  //   const interval = await this.currentSemesterRepository.selectIntervalOfExam()

  //   // return interval.map(i => {
  //   //   const p1 = new Date(i.p1_start)
  //   //   const p1_start = `${p1.getDate()}/${p1.getMonth() + 1}/${p1.getFullYear()}`

  //   //   return ({ ...i, p1_start })
  //   // })
  // }

  intervalExam = async (): Promise<IIntervalOfExamsDto[]> => {
    return this.currentSemesterRepository.selectIntervalOfExam()
  }
}
