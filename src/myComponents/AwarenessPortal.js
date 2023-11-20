import { Button } from "reactstrap";
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function Awareness() {

  const [blogs, setBlogs] = useState([]);

  const trimContent = (content, maxChars = 50) => {
    return content.length > maxChars ? content.substring(0, maxChars) + '...' : content;
  };

useEffect(() => {
   const storedToken = localStorage.getItem('authToken');
 axios.get(process.env.REACT_APP_API_URL+'/showBlogs',
  { headers: {
    Authorization:storedToken, // Add the "Authorization" header like this
  }}
) 
    
    .then((res) =>{ 
      console.log(res.data);
      setBlogs(res.data.blogs)
      console.log("blogs", res.data.blogs)
    })
      
    .catch((error) => console.error('Error fetching data:', error));
}, []);


const pairs = [];
  for (let i = 0; i < blogs.length; i += 2) {
    pairs.push([blogs[i], blogs[i + 1]]);
  }



  return (

    <div>
    <div className="container-fluid bg-image">
      <div className="row">
        <div className="col-12 centered-text">
          <h1 className="heading1">Awareness Portal</h1>
          <h3 className="heading2">The planet speaks, we listen.</h3>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-4">
    <div>
    <Button color="success" size="lg" outline href="/addBlog" style={{marginLeft:150}}>
     add Blog
    </Button>
    </div>
    &nbsp;
    &nbsp;
    {pairs.map((pair, index) => (

  <div key={index} className="row">
    {console.log(pair[1]?._id)}
    <div className="col-md-6">
      <div className="card custom-card1">
        <img src={pair[0].image} className="card-img-top" alt="noimg1" />
        <div className="card-body">
          <h5 className="card-title">
          <Link
            style={{
                fontWeight: 700,
                color: '#1a3520',
                fontSize: '25px',
                lineHeight: '35px',
                fontFamily: 'Lora',
                textAlign: 'center',
              }}
            to={`/blog/${pair[0]._id}`}
            >
              {pair[0].title}
          </Link>

            <p>{trimContent(pair[0].content)} </p>
          </h5>
          <Button color="danger" size="sm" style={{marginLeft:150}}>
   delete Blog
    </Button>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      { (pair[1])?
      <div className="card custom-card2">
        <img src={pair[1]?.image} className="card-img-top" alt="noimg2" />
        <div className="card-body">
          <h5 className="card-title">
           
         <Link
            style={{
                fontWeight: 700,
                color: '#1a3520',
                fontSize: '25px',
                lineHeight: '35px',
                fontFamily: 'Lora',
                textAlign: 'center',
              }}
            to={`/blog/${pair[1]._id}`}
            >
              {pair[1].title}
          </Link>

            <p>{trimContent(pair[1].content)} </p>
          </h5>
          <Button color="danger" size="sm" style={{marginLeft:150}}>
   delete Blog
    </Button>
        </div>
      </div>:
      <></>
      }
    </div>
  </div>
))}

          </div>
        </div>
  );
}
