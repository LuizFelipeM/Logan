import { semestersTable } from '../database/common/semestersTable'
import { IIntervalOfExamsDto } from '../domain/interfaces/contracts/IIntervalOfExamsDto'
import { ISemester } from '../domain/interfaces/entities/ISemester'
import { AbstractRepository } from './AbstractRepository'

export class SemesterRepository extends AbstractRepository<ISemester> {
  constructor () {
    super(semestersTable)
  }

  selectIntervalOfExam = async () : Promise<IIntervalOfExamsDto[]> => await this.session
    .select(
      'eval_p1_start as p1_start',
      'eval_p1_end as p1_end',
      'eval_p2_start as p2_start',
      'eval_p2_end as p2_end',
      'eval_sub_start as sub_start',
      'eval_sub_end as sub_end',
      'eval_exam_start as exam_start',
      'eval_exam_end as exam_end'
    )
}
