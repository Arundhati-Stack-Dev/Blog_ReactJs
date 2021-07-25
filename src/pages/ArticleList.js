import React, { Component } from 'react';
import DummyDate from "./dummyDate";
import axios from 'axios';
import {Link} from "react-router-dom";


class ArticleList extends Component{
    // const date = new Date();
    // const month = date.getMonth() +1;
    // const year = date.getFullYear();
    // console.log(DummyDate);
    
    state={
        articles:[]
    };

    componentDidMount(){
      axios
      .get("http://localhost:8002/api/articles")
      .then((res)=>this.setState({
          articles: res.data
      }))
      .catch((err)=>console.log(err));
           
     }
    render(){
        const date = Date(this.state.articles.DateOfPublish);
        const month = date.substring(4, 7);
        const year = date.substring(11,15);
        // console.log(year);
        // console.log(this.state.articles);
    return(
        <div className="Article">
            <h1 className="Page_header">Article List</h1>
            
            <div className="box">
                {this.state.articles.map((article, index)=>(
                <div  key={index} className="article-box">
                    <div className="article_date">
                       {year} <br/> {month}
                    </div>
               <div className="article-title">
                   <h2>{article.Title}</h2>
                <h2>{article.name}</h2>
                   
                   <Link to={`/article/${article._id}`}>View Details</Link>
                   
               </div>
           </div>
        ))}
         </div>
        </div>
        
    );
       
    
}
}

export default ArticleList;