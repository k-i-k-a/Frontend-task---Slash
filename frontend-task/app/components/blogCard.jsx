import React from 'react';
import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
    maxWidth: 600,
    margin: '20px auto',
    padding:"0px",
    borderRadius: '8px',
    
});

const BlogCard = ({ title, content,id }) => {
    return (
        <StyledCard>
            
            <CardContent style={{padding:"0px"}}>
                <div style={{background: 'linear-gradient(135deg, #64b5f6 0%, #1976d2 100%)',color: '#fff', width:"100%",padding:"16px"}}>
                <Typography variant="h5" component="h2"  >
                    {title}
                </Typography>
                </div>
                <div style={{padding:"16px"}}>
                <Typography variant="body1" component="p" noWrap>
                    {content}
                </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" onClick={() => window.location.href = `/Post/${id}`}>
                    Read More
                </Button>
            </CardActions>
        </StyledCard>
    );
};

export default BlogCard;
