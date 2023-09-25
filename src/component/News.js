import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey Headline</h1> 
        <div className="row"> 
        <div className="col-md-3"><NewsItem title = "mytitle" description="my description" imagurl=""/></div>
        <div className="col-md-3"><NewsItem title = "mytitle" description="my description"/></div>
        <div className="col-md-3"><NewsItem title = "mytitle" description="my description"/></div>
        <div className="col-md-3"><NewsItem title = "mytitle" description="my description"/></div> 
        </div>
      </div>
    )
  }
}
