import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  // static defaultProps ={
  //   country:'in',
  //   pagesize:8,
  //   category:'general'
  // }
  // static PropTypes =  {
  //   country:PropTypes.string,
  //   pagesize:PropTypes.number,
  //   category:PropTypes.string
  // }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
    document.title = `${this.props.category} - News Monkey HeadLines`
  }
  async componentDidMount() {
    this.props.setprogress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce04892b3a6f4779836edca3f7acb04f&page=1&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    this.props.setprogress(50);
    let data = await fetch(url);
    this.props.setprogress(70);

    let paresdData = await data.json(); 
    this.setState({ articles: paresdData.articles, totalResults: paresdData.totalResults, loading: false })
    this.props.setprogress(100)
  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce04892b3a6f4779836edca3f7acb04f${this.state.page + 1}&pageSize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let paresdData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: paresdData.articles,
        loading: false
      })
    } 

  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce04892b3a6f4779836edca3f7acb04f${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let paresdData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: paresdData.articles,
      loading: false

    })
  }
    fetchMoreData = async() => {
      this.setState({page:this.state.page+1 })
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce04892b3a6f4779836edca3f7acb04f&page=1&pageSize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let paresdData = await data.json();
      this.setState({ articles:this.state.articles.concat( paresdData.articles)  , totalResults: paresdData.totalResults, loading: false })
      

    };

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{ margin: '35px 0px' }}>  NewsMonkey Headline on {this.props.category}</h1>
        {/* {this.state.loading && <Spinner/>}  */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="row">
            {
              this.state.articles.map((element) => {
                return <div className="col-md-3" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newurl={element.url} author={element.author} date={element.date} />
                </div>
              })
            }


            {/* <div className="col-md-3"><NewsItem title = "mytitle" description="my description" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/3DCF/production/_131232851_almendralejogemalorenzo.jpg"/></div>
        <div className="col-md-3"><NewsItem title = "mytitle" description="my description" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/3DCF/production/_131232851_almendralejogemalorenzo.jpg"/></div> 
        <div className="col-md-3"><NewsItem title = "mytitle" description="my description" imageurl="https://ichef.bbci.co.uk/news/1024/branded_news/3DCF/production/_131232851_almendralejogemalorenzo.jpg"/></div>  */}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div> */}
      </div>
    )
  }
}
