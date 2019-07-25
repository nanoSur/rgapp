import React, { Component } from "react"
import Heading from "../Reuseable/Heading"
import Img from "gatsby-image"

const getCategory = items => {
  let holdItems = items.map(items => {
    return items.node.category
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategories: getCategory(props.courses.edges),
    }
  }

  catClicked = category => {
    let original = [...this.state.courses]

    if (category === "all") {
      this.setState(() => {
        return { mycourses: original }
      })
    } else {
      let holdOption = original.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { mycourses: holdOption }
      })
    }
  }

  render() {
    //console.log(this.state.courses)

    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" className="text-muted" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn  btn-warning m-3 px-3"
                    key={index}
                    onClick={() => {
                      this.catClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between ">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success ">$$ {node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://reactgatsby.netlify.com/"
                      data-item-image={node.image.fixed.src}
                      className="btn btn-warning
                    snipcart-add-item"
                    >
                      Join now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
