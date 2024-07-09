import moment from 'moment';

const testGrid1 ={
    rows:[
        { id: 1, col1: 'Saad', col2: 'Aslam', col3:'saslam@intouchconnections.com', col4: moment('2024-03-31').format("MMMM DD YYYY") },
        { id: 2, col1: 'Nate ',col2:'Esparza', col3: 'nesparza@intouchconnections.com',col4: moment('2024-03-31').format("MMMM DD YYYY") },
        { id: 3, col1: 'Vinnie', col2: 'Senese', col3:'vsense@intouchconnections.com',col4: moment('2024-03-31').format("MMMM DD YYYY") },
        
      ],
    columns: [
        { field: 'col1', headerName: 'First Name', width: 150 },
        { field: 'col2', headerName: 'Last Name', width: 150 },
        { field: 'col3', headerName: 'Email', width: 150 },
        {field:'col4', headerName: 'Date', width:150}
      ]
}

const upcomingCalendarTableData = {
  rows:[
  {id:1, col1:'Nebraska Meeting', col2: moment("12:00:00", "HH:mm").format("h:mm A"), col3:moment("13:00:00", "HH:mm").format("h:mm A"), col4: moment('2024-03-31').format("MMMM DD YYYY")}
],
  columns:[
    {field:'col1', headerName:'Title', width:150},
    {field:'col2', headerName:'Start Time', width:150},
    {field: 'col3', headerName:'End Time', width:150},
    {field:'col4', headerName: 'Date', width:150}
  ]
}

const calendarTableData = {
  rows:[
  {id:1, col1:'Vermont Meeting', col2:moment("14:00:00", "HH:mm").format("h:mm A"), col3: moment("15:00:00", "HH:mm").format("h:mm A"), col4: moment('2024-02-06').format("MMMM DD YYYY")},

],
  columns:[
    {field:'col1', headerName:'Title', width:150},
    {field:'col2', headerName:'Start Time', width:150},
    {field: 'col3', headerName:'End Time', width:150},
    {field:'col4', headerName: 'Date', width:150}
  ]
}



export {testGrid1, calendarTableData, upcomingCalendarTableData};