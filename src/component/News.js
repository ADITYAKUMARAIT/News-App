import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
        <h1>This is a news component</h1>   
        <NewsItem/>
        
      </div>
    )
  }
}
