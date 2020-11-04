import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

const YearCalendar: React.FC = () => {
  const [datas, setDatas] = useState<Date>(new Date())

  const onChange = (date:Date | Date[]) => setDatas(date as Date)
  return (
    <div>
      <Calendar
        className="teste-calendario"
        onChange={onChange}
        value={datas}
      />
    </div>
  )
}

// function MyApp3() {
//   const [datas, setDatas] = useState<Date>(new Date())

//   const onChange = (date:Date | Date[]) => setDatas(date as Date)
//   return (
//     <div>
//       <Calendar
//         onChange={onChange}
//         value={datas}
//       />
//     </div>
//   )
// }

export default YearCalendar
