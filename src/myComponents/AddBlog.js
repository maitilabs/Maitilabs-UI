import React, { useState } from "react";
import axios from "axios"; // Import Axios

function AddBlog() {
  const storedToken = localStorage.getItem('authToken');

  const [formData, setFormData] = useState({
    title: "",
    image:"",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlefileupload= async(e) => {

    const image = e.target.files[0];
    const base64= await convertToBase64(image);
    console.log(image);
    setFormData({...formData, image: base64 });
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL+"/addBlog",
        formData,{
         headers: {
          Authorization:storedToken, // Add the "Authorization" header like this
        }
    });
    console.log(response);

      if (response.status === 201) {
        alert("Blog post created successfully");

        setFormData({
          title: "",
          image:"",
          content: "",
          author: "",
        });
      
      } else {
        console.error("Blog post creation failed:", response.data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  return (
    <div className="container">
      <form id="myform" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-2">
            <label htmlFor="title" className="form-label">
              Title
            </label>
          </div>
          <div className="col-md-10">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-2">
            <label htmlFor="image" className="form-label">
              photo
            </label>
          </div>
          <div className="col-md-10">
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                accept=".jpeg,.png,.jpg"
              
                onChange={handlefileupload}
                required
              />
            </div>
          </div>
          <div className="col-md-2">
            <label htmlFor="author" className="form-label">
              Author
            </label>
          </div>
          <div className="col-md-10">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            rows={9}
            className="form-control"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal-footer">
          <button
            type="reset"
            className="btn btn-secondary"
            style={{marginRight:10}}
          >
            Clear
          </button>
          <button type="submit" className="btn btn-success" onSubmit={handleSubmit }>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const filereader = new FileReader();
  filereader.readAsDataURL(file);
    filereader.onload = () => {
      resolve(filereader.result)
};
  filereader.onerror = (error) => {
  reject(error)

}; 
})
}
