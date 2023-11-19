import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function BlogDetail() {

  const { id } = useParams();
  const [blog, setBlog] = useState({});
  console.log(id);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fetch the individual blog from the API using the ID
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/${id}`);
        console.log(response.data);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };
  
    fetchBlog();
  }, [id]);
  
  return (
    <section className="blog-detail">
      <button onClick={() => window.history.back()}>Back</button>
      <img src={blog.image} className="card-img-top" alt="noimg1" />
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </section>
  );
}

export default BlogDetail;
