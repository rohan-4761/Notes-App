import React from 'react';
import { Drawer, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {format} from 'date-fns'
const drawerWidth = 240;

const useStyles ={
    page:{
        background:'#f9f9f9',
        width: '100%',
    },
    root:{
        display: 'flex'
    },
    active:{
        background: '#f4f4f4'
    },
    appbar:{
        width: `calc(100% - ${drawerWidth}px)`,
        background: '#fefefe'
    },
    date:{
        flexGrow: 1
    },
    avatar:{
        marginLeft: '16px'
    }
}
const drawerStyles = {
    drawer:{
        width: drawerWidth,
    },
    paper:{
        style:{
            width: drawerWidth
        }
    }
}

export default function Layout({children}){
    const navigate =  useNavigate()
    const location = useLocation()
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create'
        }
    ]
    return (
        <div style={useStyles.root} >
            <AppBar sx={useStyles.appbar} elevation={0}>
                <Toolbar>
                    <Typography  
                    color='textPrimary' 
                    sx = {useStyles.date}
                    >
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography variant='h6' color='secondary'>
                        Rohan
                    </Typography>
                    <Avatar src="/mario-av.png" sx={useStyles.avatar}/>
                </Toolbar>
            </AppBar>

            <Drawer
                variant = 'permanent'
                anchor='left'
                style= {drawerStyles.drawer}
                PaperProps={drawerStyles.paper}
            >
                <div>
                    <Typography variant='h5' style={{ paddingLeft: 30, paddingTop: 20,paddingBottom: 10}}>
                        Menu
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item=>(
                        <ListItemButton
                        key={item.text} 
                        onClick={() => navigate(item.path)}
                        style = {location.pathname === item.path ? useStyles.active : null }
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <Box style={{marginTop:90}}>
                <div sx={useStyles.page}>
                    {children}
                </div>
            </Box>
        </div>
    )
}

