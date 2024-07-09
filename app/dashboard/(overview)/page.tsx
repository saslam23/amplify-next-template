'use client';
import OverViewTab from './OverviewTab';
import NotesTab from './NotesTab';
import CalendarTab from './CalendarTab';
import ClientCalendar from "@/app/ui/dashboard/ClientCalendar";
import {post} from "aws-amplify/api";
import { Amplify } from 'aws-amplify';
//import amplifyconfig from '../../../amplifyconfiguration.json';
import {useState,SyntheticEvent, useEffect} from 'react';
//import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
//Amplify.configure(amplifyconfig);


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}



function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Page(){
const [value, setValue] = useState(0);
const theme = useTheme();
const handleChange = (event: SyntheticEvent, newValue: number) => {
  setValue(newValue);
};


  const postTest = async () =>{
    try {
    
      const restOperation = post({
        apiName: 'intouchapi',
        path: '/intouch',
        options: {
          body: {
            message: 'Mow the lawn'
          }
        }
      });
  console.log(restOperation);
      const { body } = await restOperation.response;
      const response = await body.json();
  
      console.log('POST call succeeded');
      console.log(response);
    } catch (e) {
      console.log('POST call failed: ', e);
    }
  }
    return(
        <>
      <main>
      <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Calendar" {...a11yProps(0)} />
          <Tab label="Overview" {...a11yProps(1)} />
          <Tab label="Notes" {...a11yProps(2)} />
        </Tabs>


        <TabPanel value={value} index={0} dir={theme.direction}>
       <CalendarTab/>
        </TabPanel>
        
        <TabPanel value={value} index={1} dir={theme.direction}>
      <OverViewTab/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
      <NotesTab/>
        </TabPanel>
    </Box>
      </main>

        </>
    )
}