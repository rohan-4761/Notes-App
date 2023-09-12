import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { green, pink, blue, yellow } from '@mui/material/colors';



export default function NoteCard({note, handleDelete}){
    
    const avatarColor = {
        work: yellow[700],
        money: green[700],
        todos: blue[700],
        reminder: pink[700]
    }

    return(
        <div>
            <Card elevation={2}>
                <CardHeader 
                    avatar={
                        <Avatar
                            sx = {{bgcolor: avatarColor[note.category]}}
                        >
                            {note.category[0].toUpperCase()}
                        </Avatar>
                }
                    action = {
                        <IconButton
                            onClick={() => handleDelete(note.id)}
                        >
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                <Typography variant='body2'>
                    {note.details}
                </Typography>
            </CardContent>
            </Card>
            
        </div>
    )
}