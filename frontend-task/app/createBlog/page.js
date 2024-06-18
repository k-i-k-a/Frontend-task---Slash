"use client"
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Grid, Snackbar, Alert } from '@mui/material';

function BlogPage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSubmit = () => {
        if (!title || !body) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Please fill out all fields');
        } else {
            setSnackbarSeverity('success');
            setSnackbarMessage('Blog submitted successfully');
        }
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        if (snackbarSeverity === 'success') {
            window.location.href = '/';
        }
    };

    return (
        <Grid container justifyContent="center" style={{ marginTop: "5%" }}>
            <Grid item xs={10} sm={8} md={6} lg={4}>
                <Card sx={{ padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Write a New Blog
                        </Typography>
                        <TextField
                            label="Title"
                            fullWidth
                            margin="normal"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            label="Body"
                            fullWidth
                            margin="normal"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            multiline
                            rows={6}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            style={{ marginTop: '20px' }}
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={1000}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Grid>
    );
}

export default BlogPage;
