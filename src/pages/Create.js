import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';    


const styleSheet ={
    btn:{
        fontSize: 60,
        backgroundColor: 'blue',
        width:33,
        '&:hover':{
            backgroundColor: 'cyan'
        },
    },
    title:{
        color: 'red',
    },
    form:{
        marginTop: 5,
        marginBottom: 5
    },
    formfield:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
};

export default function Create() {
    
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title === ''){
            setTitleError(true)
        }
        if (details === ''){
            setDetailsError(true)
        }
        if (title && details){
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({title, details, category})
            }).then(()=>navigate('/'))
        }
    }

    return (
        <div>
            <Container>
            <Typography
                variant='h6'
                component='h2'
                color='secondary'
                // sx = {styleSheet.title}
                gutterBottom
            >
                Create a New Note.
            </Typography>

            <form noValidate autoComplete='off' style={styleSheet.formfield} onSubmit={handleSubmit}>
                <TextField 
                    sx = {styleSheet.form}
                    label='Note Title'
                    onChange={(e) => setTitle(e.target.value)}
                    variant='outlined'
                    color='secondary'
                    required
                    error = {titleError}
                />
                <TextField 
                    sx = {styleSheet.form}
                    label='Note Details'
                    onChange={(e) => setDetails(e.target.value)}
                    variant='outlined'
                    color='secondary'
                    required
                    multiline
                    rows={4}
                    error = {detailsError}
                />
                <FormControl>
                    <FormLabel>Note Category: {category}</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value='money' control={<Radio />} label='Money'/>
                        <FormControlLabel value='todos' control={<Radio />} label='Todos'/>
                        <FormControlLabel value='reminder' control={<Radio />} label='Reminder'/>
                        <FormControlLabel value='work' control={<Radio />} label='Work'/>
                    </RadioGroup>
                </FormControl>
                <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    sx = {{width:150, marginTop:5}}
                    startIcon={<SendIcon />}
                >
                    Submit
                </Button>
            </form>

            
            </Container>
        </div>
    )
}
