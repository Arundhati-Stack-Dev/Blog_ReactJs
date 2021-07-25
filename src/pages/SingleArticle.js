import React, { Component } from 'react';
// import DummyData from "./dummyDate";
import Page404 from './404Page';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';


class SingleArticle extends Component{
    // const name = props.match.params.name;
    // const article = DummyData.find((article)=> article.name ===name);
    // console.log(props.match.params);
    // if(!article) return<Page404/>;

    state={
        title:"",
        content:[],
        votes:0,
        id:"",
        comment:"",
        comm:"",
    };

    componentDidMount(){
        const id = this.props.match.params._id;
        // console.log(id);
        axios.get(`http://localhost:8002/api/articles/${id}`)
        .then((res)=>
         this.setState({
             title: res.data.Title,
             content: res.data.Content,
             votes: res.data.votes,
             id: res.data._id,
             comm: res.data.comment,
         }))
        .catch((err)=> console.log(err));

    }

    handleClick=(id)=>{
        axios.put(`http://localhost:8002/api/votes/${id}`)
        .then(res => this.setState({votes:res.data}))
        .catch(err =>console.log(err));

    };

    handleChange= (e)=>{
        this.setState({comment:e.target.value});
    };

    handleComment=(e)=>{
        e.preventDefault();
        const id = this.props.match.params._id;
        axios
            .put(`http://localhost:8002/api/comment/${id}`, {
                comment:this.state.comment,
            })
            .then((res)=>console.log("got data"))
            .catch((err)=>console.log(err));
    };

    render (){
     console.log(this.state.comm);
    return(
         <div className="article">
             <h1 className="page_header">{this.state.title}</h1>
             {this.state.content.map((paragraph, index)=>(
                 <p style={{marginTop:"30px"}} key={index}>
                     {paragraph}
                     </p>
    ))}
        {/* Like button with functionality */}
         <img src ="/images/thumbsup.png" alt="Like"
          width="30px" style={{cursor:"pointer", marginTop:"20px"}}
          onClick= {()=>this.handleClick(this.state.id)}/>
          {this.state.votes}
         
         {/* Comment Input  */}
         <form onSubmit={this.handleComment}>
             <textarea
             value={this.state.comment}
             onChange={this.handleChange}
             rows="4"
             ></textarea>
             <button type="submit">Submit</button>

         </form>
         <Comment comment ={this.state.comm}/>


         <div style={{margin:"30px auto", width:"30%"}}>
          <Link to="/article-list" className="back_btn">
              Go Back To List
              </Link>
         </div>
        </div> 
    );
       
    
};
}

export default SingleArticle;