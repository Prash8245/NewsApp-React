import React, { Component }  from 'react'
import NewsItem from './newsitem';

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fab1c3e760024daeb1ce89fffa61d676&pageSize=9&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles : parsedData.articles,
            total : parsedData.totalResults
        });
    }

    handelPrev = async () =>{
        if(this.state.page < 1) {

        }

        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fab1c3e760024daeb1ce89fffa61d676&pageSize=9&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page -1,
            articles : parsedData.articles
        });
    }
    }

    handelNext = async () =>{
        if(this.state.page + 1 > Math.ceil(this.state.total / 9)){

        }
        else {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fab1c3e760024daeb1ce89fffa61d676&pageSize=9&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page +1,
            articles : parsedData.articles
        });
    }
    }

  render() {
    return (
      <div className='container'>
        <h2 className='fs-3 my-5 text-center'>Get All Latest News Here</h2>
        <div className='row'>
            {this.state.articles.map((element) => {
                return <div className='col-md-3 mx-5 my-2' key={element.url}>
                        <NewsItem
                            src = {element.urlToImage}  
                            title={element.title} 
                            description={element.content} 
                            newsUrl={element.url}/>
                </div>
            })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button type="button" onClick={this.handelPrev} className="btn btn-dark">Previous</button>
        <button type="button" onClick={this.handelNext} className="btn btn-dark">Next</button>
        </div>
        
      </div>
    )
  }
}
