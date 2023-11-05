import React, { useState, useEffect } from 'react';

function BlogDetail(props) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Extract the blog ID from the URL parameter
    const blogId = props.match.params.id;

    // Fetch the specific blog post using the ID
    fetch(`https://multibogs.onrender.com/api/blogs/${blogId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
      })
      .catch((error) => {
        console.error('Error fetching blog post:', error);
      });
  }, [props.match.params.id]);

  if (!blog) {
    // Loading state or error handling can be added here
    return <div>Loading...</div>;
  }

  return (
    <section className="blog-detail">
      <button onClick={() => window.history.back()}>Back</button>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </section>
  );
}

export default BlogDetail;
