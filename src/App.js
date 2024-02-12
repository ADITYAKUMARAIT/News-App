import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'

// import { 
//   BrowserRouter as Router,
//   Route,
//   Switch,


//  } from 'react-router-dom'
export default class App extends Component {
  state={
    progress:0
  }
  pagesize=20;
  setprogress=(progress)=>{
    this.setState({progress:progress})

  }
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress }
      />
        {/* <News pagesize={this.pagesize}  country="us" category="technology"/> */}
          <News setprogress ={this.setprogress}pagesize={this.pagesize}  country="us" category="technology"/>
          {/* <News pagesize={this.pagesize}  country="us" category="business"/>
          <News pagesize={this.pagesize}  country="us" category="Entertainment"/>
          <News pagesize={this.pagesize}  country="us" category="Health"/>
          <News pagesize={this.pagesize}  country="us" category="Science"/>
          <News pagesize={this.pagesize}  country="us" category="Sports"/>
          <News pagesize={this.pagesize}  country="us" category="General"/> */}
      </div>
    )
  }
}

 