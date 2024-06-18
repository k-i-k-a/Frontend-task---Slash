"use client"
import React, { useState, useEffect } from 'react';
import { Card, Skeleton, Typography, Grid, Paper } from '@mui/material';

function App({ params }) {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.log(error));
    }, [params.id]);

    return (
        <Grid container justifyContent="center" style={{ marginTop: "5%" }}>
            <Grid item xs={10} md={8} lg={6}>
                <Paper elevation={3} style={{ padding: "20px", borderRadius: "15px" }}>
                    {blog ? (
                        <div>
                            <Typography variant='h4' gutterBottom>{blog.title}</Typography>
                            <Typography variant='body1' paragraph>{blog.body}</Typography>
                        </div>
                    ) : (
                        <div>
                            <Skeleton variant="text" animation="wave" height={60} width="50%" />
                            <Skeleton variant="text" animation="wave" height={20} width="30%" />
                            <Skeleton variant="text" animation="wave" height={20} width="80%" />
                            <Skeleton variant="text" animation="wave" height={20} width="60%" />
                        </div>
                    )}
                </Paper>
            </Grid>
        </Grid>
    );
}

export default App;
