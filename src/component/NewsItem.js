import React, { Component } from 'react'

export class NewsItem extends Component { 
  render() {
    let {title,description,imageurl,newurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card"  >
          <img src={!imageurl?"https://image.cnbcfm.com/api/v1/image/107241460-1684193320038-gettyimages-1251294654-CHINA_SHANGHAI.jpeg?v=1695704142&w=1920&h=1080":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={newurl} target='_blank' className="btn btn-sm  btn-dark">READ HERE</a>
            </div>
        </div> 
      </div>
    )
  }
}

export default NewsItem
