import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {poppins}from '@/app/ui/fonts'
import { ChatBubbleBottomCenterTextIcon, EnvelopeIcon, BoltIcon} from '@heroicons/react/24/outline';

const icons={
  totalTactics: BoltIcon,
  emails:EnvelopeIcon,
  sms:ChatBubbleBottomCenterTextIcon
}

const cardsData=[
  {
    id:1,
    title:"Total Tactics",
    type:"totalTactics",
    icon:BoltIcon
  },
  {
    id:2,
    title:"Emails",
    type:"emails",
    icon:EnvelopeIcon
  },
  {
    id:3,
    title:"SMS",
    type:"sms",
    icon:ChatBubbleBottomCenterTextIcon
  }
]


export default async function CardWrapper() {

  return (
    <>

    {
      cardsData.map((card) =>
      <>

        <DataCard title={card.title} type={card.type} icon={card.icon}/>
      </>
      )
    }
    
  
    </>
  );
}

export  function DataCard({title,type, icon}: {title:string, type:string, icon:any}) {
 const Icon = icon
  return (
    <Card style={{backgroundColor:'#f1f5f9'}} className=" p-2 shadow-sm" sx={{ minWidth: 275 }}>
      <CardContent>
        <h2 className="bg-white rounded-xl mb-5 px-4 py-2" >
{Icon ?<Icon className="h-5 w-5 text-gray-700"/>:null}
          {title}
        </h2>
        <p
        className={`${poppins.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        45678
      </p>

      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}