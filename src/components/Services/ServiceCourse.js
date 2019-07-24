import React from "react"

export default function ServiceCourse() {
  return (
    <section>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Courses</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <div class="card-group">
            <div class="card">
              <img
                class="card-img-top"
                src="https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_960_720.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Blitzkerbig</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="https://cdn.pixabay.com/photo/2017/05/24/22/57/ask-2341784_960_720.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Ask many questions</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="https://cdn.pixabay.com/photo/2017/05/24/09/28/great-2339957_960_720.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Adventure</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
