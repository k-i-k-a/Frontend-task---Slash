"use client"
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import Icon from '@mui/material/Icon';

function Navbar() {
    return (
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <div style={{display:"flex",alignItems:"center",height:"60px",marginRight:"auto",cursor:"pointer"}} onClick={()=>window.location.href="/"}>
            <StickyNote2Icon sx={{ fontSize: 30 }} />
            <Typography variant="h6">
              Bloggy
            </Typography>
            </div>
            <Button variant="Text" startIcon={<Icon baseClassName="fas" className="fa-plus-circle" />} onClick={()=> window.location.href="/createBlog"}>Add new blog</Button>
          </Toolbar>
        </AppBar>
    );
}

export default Navbar;