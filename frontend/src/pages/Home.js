import React from 'react';

function Home() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <textarea className="form-control" rows="5" placeholder="What do you think?"></textarea>
              </div>
              <div className="form-group mt-2">
                <button className="btn btn-primary" style={{ float: "right" }}>Share</button>
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