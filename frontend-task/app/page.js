"use client"
import { Stack, Skeleton } from "@mui/material";
import BlogCard from "./components/blogCard";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const numSkeletonRows = Math.ceil(window.innerHeight / 100);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      
      <Grid container sx={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
        {isLoading ? (
          // Display skeleton preview while loading

          Array.from({ length: numSkeletonRows }).map((_, index) => (
            <Grid item key={index} xs={6} sx={{margin: '20px auto',display:"flex",alignItems:"center",flexDirection:"column"}}>
                <Skeleton variant="rectangular" width="600px" height={100} />
                <Skeleton variant="text" width="600px" />
            </Grid>
          ))
        ) : (
          // Display blog cards when data is loaded
          posts.map((post) => (
            <Grid item key={post.id} xs={6}>
              <BlogCard title={post.title} content={post.body} id={post.id} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}