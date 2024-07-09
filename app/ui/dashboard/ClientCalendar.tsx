'use client';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar'
import {useState, useMemo, useCallback} from 'react';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import calendarData from "@/app/lib/calendarData";
import './style.css';
const locales = {
    'en-US': enUS,
  }
  
interface viewsInfo{
  
    MONTH: string;
    WEEK: string;
    WORK_WEEK: string;
    DAY: string;
    AGENDA: string;

}


export default function ClientCalendar(){
const [view, setView] = useState( Views.MONTH);
const [date, setDate] = useState(new Date())
const onView = useCallback((newView: any) => setView(newView), [setView])
const onNavigate = useCallback((newDate: any) => setDate(newDate), [setDate])
    const localizer = dateFnsLocalizer({
    
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
      })
      
    return(
        <>
        <div>
            <Calendar
            defaultView={Views.MONTH}
        onView={onView}
        date={date}
        onNavigate={onNavigate}
            view={view}
             showMultiDayTimes
             step={60}
            localizer={localizer}
            style={{height:500, margin:'50px'}}
            startAccessor="start"
            endAccessor="end"
            events={calendarData}
            eventPropGetter={(event, start, end, isSelected)=>{
              var backgroundColor= event.hexColor;
              var style={
                backgroundColor:backgroundColor
              }
              return{
                style:style
              }
            }}
            />
        </div>
        </>
    )
}