import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import { StandardCard } from 'bootstrap-based-components'

const YearCalendar: React.FC = () => {
  const [datas, setDatas] = useState<Date>(new Date())

  const onChange = (date:Date | Date[]) => setDatas(date as Date)
  return (
    <StandardCard className="standard-calendar" header="Calendario">
      <Calendar
        className="calendar"
        onChange={onChange}
        value={datas}
      />
    </StandardCard>
  )
}

export default YearCalendar
