'use client';
import {useState, useEffect} from 'react';
import {Suspense} from 'react';
import {CardsSkeleton} from '@/app/ui/skeletons';
import CardWrapper from "@/app/ui/dashboard/DataCard";
import Table from "@/app/ui/dashboard/tables/Table";

import {testGrid1} from '../../lib/gridData';

export default function OverviewTab(){
const [gridData, setGridData] = useState(testGrid1);

useEffect(() =>{

})

    return(
        <>
        <div style={{marginTop:"25px"}} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<Suspense fallback={<CardsSkeleton/>}>
<CardWrapper/>
</Suspense>

        </div>
        <br/>
        <div>

        <Table data={gridData}/>
        </div>
        </>
    )
}