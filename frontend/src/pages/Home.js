import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [content, setContent] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    axios.post("http://localhost:5000/api/post", { userId: user._id, content: content })
      .then(res => {
        alert(res.data.message);
        setContent("");
      })
      .catch(err => {
        console.log(err.data);
      });
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form className="off" onSubmit={addPost}>
              <div className="form-group">
                <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" rows="5" placeholder="What do you think?"></textarea>
              </div>
              <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary" style={{ float: "right" }}>Share</button>
              </div>
            </form>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h5>Dilara Uluturhan - 28.03.2023 21:51</h5>
            <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h5>Dilara Uluturhan - 28.03.2023 21:51</h5>
            <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;