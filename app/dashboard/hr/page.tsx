import Table from "@/app/ui/dashboard/tables/Table";
import {testGrid1} from '@/app/lib/gridData';
export default function(){
    return(
        <>
        <h1>Human Resources</h1>
        <br></br>
        <Table data={testGrid1}/>
        </>
    )
}