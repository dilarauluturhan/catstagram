import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    axios.post("http://localhost:5000/api/post", { userId: user._id, content: content })
      .then(async (res) => {
        await getPosts();
        alert(res.data.message);
        setContent("");
      })
      .catch(err => {
        console.log(err.data);
      });
  }

  const getPosts = async () => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card mt-4">
            <div className="card-header" style={{ backgroundImage: `url(https://picsum.photos/id/12/300/70)`, height: "70px" }}>
              <img src="https://picsum.photos/id/40/200/300" style={{ width: "80px", height: "80px", borderRadius: "50%", marginLeft: "95px", marginTop: "15px" }} />
            </div>
            <div className="card-body">
              <p className="card-title header text-bolder text-center mt-4" style={{ fontSize: "25px" }} >
                MAYA
              </p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-header bg-white border-0" style={{ fontSize: "15px" }}>
              En Yeni
            </div>
            <div className="card-body">
              <div className="card-title" style={{ marginTop: "-25px" }}>
                <div>
                  <span className="ml-2 font-weight-bold" style={{ fontSize: "13px", color: "#5f5f5f" }}>#yasmama</span>
                </div>
                <div>
                  <span className="ml-2 font-weight-bold" style={{ fontSize: "13px", color: "#5f5f5f" }}>#kurumama</span>
                </div>
                <div>
                  <span className="ml-2 font-weight-bold" style={{ fontSize: "13px", color: "#5f5f5f" }}>#kedi</span>
                </div>
                <div>
                  <span className="ml-2 font-weight-bold" style={{ fontSize: "13px", color: "#5f5f5f" }}>#insanciklar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mt-4">
            <div className="card-body">
              <form autoComplete="off" onSubmit={addPost}>
                <div className="form-group">
                  <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" rows="5" placeholder="What do you meow?"></textarea>
                </div>
                <div className="form-group mt-2">
                  <button type="submit" className="btn btn-secondary" style={{ float: "right" }}>Share</button>
                </div>
              </form>
            </div>
          </div>
          {
            posts.map((val, index) => {
              return (
                <div key={index} className="card mt-3">
                  <div className="card-body">
                    <button type="button" class="btn-close" aria-label="Close" style={{ float: "right" }}></button>
                    <img src={"http://localhost:5000/" + val.users[0].avatar.path} style={{ width: "50px", height: "50px", borderRadius: "50px" }} />
                    <h5>{val.users[0].name} - {val.createdDate}</h5>
                    <p>{val.content}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="col-md-3">
          <div className="card mt-4 mb-3">
            <img src="https://picsum.photos/id/237/150/100" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title text-center fw-semibold" style={{ fontSize: "20px" }}>@zeytin</p>
              <a href="#" className="btn btn-outline-secondary" style={{ marginLeft: "85px" }}>View Profile</a>
            </div>
          </div>
          <div className="card mb-3">
            <img src="https://picsum.photos/id/50/150/100" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title text-center fw-semibold" style={{ fontSize: "20px" }}>@martı</p>
              <a href="#" className="btn btn-outline-secondary" style={{ marginLeft: "85px" }}>View Profile</a>
            </div>
          </div>
          <div className="card mb-3">
            <img src="https://picsum.photos/id/169/150/100" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title text-center fw-semibold" style={{ fontSize: "20px" }}>@kubrick</p>
              <a href="#" className="btn btn-outline-secondary" style={{ marginLeft: "85px" }}>View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home;