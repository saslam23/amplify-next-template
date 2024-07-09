'use client';
import {useState, useEffect} from 'react';
import {Suspense} from 'react';
import {CardsSkeleton} from '@/app/ui/skeletons';
import Table from "@/app/ui/dashboard/tables/Table";
import ClientCalendar from "@/app/ui/dashboard/ClientCalendar";
import {calendarTableData, upcomingCalendarTableData} from '../../lib/gridData';

export default function CalendarTab(){
const [gridData, setGridData] = useState(calendarTableData);

useEffect(() =>{

})

    return(
        <>
        <div>
            <ClientCalendar/>
        </div>
        <div>
            <h2 style={{textAlign:'center', marginBottom:'10px', fontWeight: 600}}>Today's Meetings</h2>
            <Table data={calendarTableData}/>
        </div>
        <div>
            <h2 style={{textAlign:'center', marginBottom:'10px', marginTop:'10px', fontWeight: 600}}>Upcoming Meetings</h2>
            <Table data={upcomingCalendarTableData}/>
        </div>
        </>
    )
}