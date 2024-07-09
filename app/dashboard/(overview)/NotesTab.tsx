
import NotesForm from '@/app/ui/dashboard/NotesForm';
import Table from "@/app/ui/dashboard/tables/Table";
import {testGrid1} from '@/app/lib/gridData'
import Grid from '@mui/material/Unstable_Grid2';
export default function NotesTab(){
    return(
        <>
        <div style={{marginTop:"25px"}}>
            <Grid container spacing={2}>
            <Grid xs={12} md={4}>
            <NotesForm/>
            </Grid>
            <Grid xs={12} md={8}>
            <h1 style={{textAlign:'center', fontSize:"20px"}}>Notes</h1>
            <Table data={testGrid1}/>
            </Grid>
            </Grid>
 
      
        </div>
        </>
    )
}