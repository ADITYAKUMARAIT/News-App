import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles: [],
      loading:false,
      page:1
    }
}
    async componentDidMount(){
        let url =  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04892b3a6f4779836edca3f7acb04f&page=1&pageSize=20";
        let data = await fetch(url);
        let paresdData = await data.json();
        this.setState({articles:paresdData.articles,totalResults:paresdData.totalResults})

    }

    handleNextClick=async()=>{
      if(this.state.page+1> Math.ceil( this.state.totalResults/20)){

      }
      else{
      let url =  `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04892b3a6f4779836edca3f7acb04f${this.state.page+1}&pageSize=20`;
      let data = await fetch(url);
      let paresdData = await data.json();
      this.setState({
        page:this.state.page+1,
        articles:paresdData.articles
      })
    } 

    }
    handlePreviousClick=async()=>{
      let url =  `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04892b3a6f4779836edca3f7acb04f${this.state.page-1}&pageSize=20`;
      let data = await fetch(url);
      let paresdData = await data.json();
      this.setState({
        page:this.state.page-1 ,
        articles:paresdData.articles
      })


    }
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey Headline</h1> 
        <div className="row"> 
        {
          this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
              <NewsItem title = {element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newurl={element.url} />
            </div>
          })
        }
        {/* <div className="col-md-3"><NewsItem title = "mytitle" description="my description" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/3DCF/production/_131232851_almendralejogemalorenzo.jpg"/></div>
        <div className="col-md-3"><NewsItem title = "mytitle" description="my description" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/3DCF/production/_131232851_almendralejogemalorenzo.jpg"/></div> 
        <div className="col-md-3"><NewsItem title = "mytitle" description="my description" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/3DCF/production/_131232851_almendralejogemalorenzo.jpg"/></div>  */}
        </div>
        <div className="container d-flex justify-content-between ">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}
