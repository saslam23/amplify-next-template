'use client';
import {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function NotesForm(){
    const [author, setAuthor] = useState('Saad');
    const [subject, setSubject] = useState('');
    const [note, setNote] = useState('');
    const [client, setClient] = useState('');
    return(
        <>
       
        <Paper sx={{padding:'10px', height:'auto'}}>
        <form>
            <FormLabel style={{color:'black'}}>Create a Note</FormLabel>
            <Box sx={{flexGrow: 1}}>
            
            <FormControl sx={{width:'100%', marginTop:'20px'}}>
   
            <TextField onChange={(e) =>setAuthor(e.target.value)} label="Author" variant="standard" value={author}/>
  
            <Select style={{marginTop:"15px"}} label="Select Company" value={client} onChange={(e) => setClient(e.target.value)}>
        <MenuItem value={'Nebraska'}>Nebraska</MenuItem>
        <MenuItem value={'FEMA'}>FEMA</MenuItem>
        <MenuItem value={'SCDMH'}>SCDMH</MenuItem>
            </Select>
            <TextField label="Subject" onChange={(e) => setSubject(e.target.value)} variant="standard" value={subject}/>
        
     
                <TextField   rows={4} multiline variant="standard" label="Note" placeholder="begin typing..." value={note} onChange={(e) => setNote(e.target.value)}/>
        
            </FormControl>
          
        </Box>
        <div style={{marginTop:'10px'}}><Button type="submit" sx={{backgroundColor:'#0085ad !important'}} variant="contained">Create Note</Button></div>
        
        </form>
        </Paper>
     
        </>
    )
}