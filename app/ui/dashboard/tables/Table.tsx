'use client';
import * as React from 'react';
import {DataGrid, GridRowsProp, GridColDef} from "@mui/x-data-grid";


interface DataProps{
  data: {
    rows: {
id:number;
col1:string;
col2:string | number;
col3:string | number;
col4: string | Date;
    }[];
    columns:{
      field:string;
      headerName:string;
      width:number
    }[];
  }
}


const Table:React.FC<DataProps> = ({data}) =>{

   const rows: GridRowsProp = data.rows;
      
      const columns: GridColDef[] = data.columns;
    return(
        <>
        <div style={{height: 300, width: '100%'}}>
          <h1></h1>
 <DataGrid rows={rows} columns={columns}/> 
        </div>
        </>
    )
}


export default Table;