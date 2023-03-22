import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {src,title,description,newsUrl} = this.props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
            <img style={{width: "286px",height: "176px"}} src={src ? src : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/iphone_15_pro_max_1-sixteen_nine.jpg?VersionId=F0HPOmT_taYqpvmIEypYlATaviqV_.3G"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0,45)+"..." : "No title"}</h5>
                <p className="card-text">{description ? description.slice(0,125)+"..." : "No Description"}</p>
                <a href={newsUrl} rel="noreferrer"  target= "_blank"  className="btn btn-primary">Read more</a>
            </div>
        </div>
      </>
    )
  }
}
