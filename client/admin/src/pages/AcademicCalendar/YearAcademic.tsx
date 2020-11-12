import React, { useEffect, useState, useContext } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { StandardCard } from 'bootstrap-based-components'
import { DateRange } from 'react-date-range'
import { WrapperContext } from '../../contexts/WrapperContext'
import semesterService from '../../services/semesterService'

interface DateRangeProp{
  startDate: Date
  endDate: Date
  key: string
  color?: string
}

const YearCalendar: React.FC = () => {
  const { setLoading } = useContext(WrapperContext)

  const [interval, setInterval] = useState<DateRangeProp[]>()

  useEffect(() => {
    setLoading(true)

    semesterService.getIntervalOfExams()
      .then((interval) => {
        const dateRangesExams: DateRangeProp[] = interval.flatMap((i) => [
          {
            key: 'p1',
            startDate: new Date(i.p1_start),
            endDate: new Date(i.p1_end),
            color: '#5c91f2'

          },
          {
            key: 'p2',
            startDate: new Date(i.p2_start),
            endDate: new Date(i.p2_end),
            color: '#5c91f2'
          },
          {
            key: 'sub',
            startDate: new Date(i.sub_start),
            endDate: new Date(i.sub_end),
            color: '#e8c551'
          },
          {
            key: 'exam',
            startDate: new Date(i.exam_start),
            endDate: new Date(i.exam_end),
            color: '#f2924e'
          }
        ])
        setInterval(dateRangesExams)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <StandardCard className="standard-calendar" header="Calendario">
      <DateRange
        className="date-picker"
        ranges={interval}
        editableDateInputs={false}
      />

    </StandardCard>
  )
}

export default YearCalendar
