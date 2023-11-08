import React from "react";
import { useState,useEffect } from "react";
import {Container, Card, CardBody, CardTitle,CardText } from "reactstrap";
import axios from 'axios';
const showBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      
      axios.get('https://maitilabs-ojaz.vercel.app/showBlogs') 
        
        .then((res) =>{ 
          console.log(res.data);
          setBlogs(res.data.documents)})

        .catch((error) => console.error('Error fetching data:', error));
    }, []);
       
console.log("blogs",blogs)

  return (
    blogs.map((item,index)=>(<> 
    <Container key={index}>
      <Card className="text-center" style={{ margin: 5 , borderRadius: 30 }} >
        <CardBody>
          <CardTitle>
           <h3>{item.blogtitle}</h3>
          </CardTitle>
          <CardText>
           <p>{item.blogcontent}</p>
          </CardText>
        </CardBody>
      </Card>
    </Container></>)
   
  ));
 
}
export default showBlog;