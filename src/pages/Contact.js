import React, {Component} from 'react';

class Contact extends Component{
      state={
          Name:"",
          Email:"",
          Number:"",
          Message:""
      }

      OnchangeHandleName =(e)=>{
          this.setState({
              Name:e.target.value,
          })
      }

      OnchangeHandleEmail =(e) =>{
        this.setState({
            Email:e.target.value
        })
      }

      OnchangeHandleNumber =(e) =>{
        this.setState({
            Number:e.target.value
        })
    }

    OnchangeHandleMessage =(e) =>{
        this.setState({
            Message:e.target.value
        })
      }
    // constructor(props){
    //     super(props)
    //     this.state ={
    //     }
    // }

    handleSubmit = (e) =>{
        alert(`${this.state.Name} ${this.state.Email} ${this.state.Number} ${this.state.Message}`)
        // e.preventDefault()
    }
    render(){
        return(
              <div className = "contact">
                  <form onSubmit={this.handleSubmit}>
                        <h1 className="Page_Header">Contact Us</h1>
                        <div className="contact_box">
                            {/* <div className="contact_box_title">
                                <span>Name</span>
                            </div>
                            <div className="contact_box_input"></div> */}
                            <input type="text" placeholder="Name" value={this.state.Name} onChange={this.OnchangeHandleName}/>
                            <input type="email" placeholder="Email" value ={this.state.Email} onChange={this.OnchangeHandleEmail}/>
                            <input type="tel" placeholder="Number" value={this.state.Number} onChange={this.OnchangeHandleNumber}/>
                            <textarea id="w3review" placeholder="Message" name="w3review" rows="4" cols="50" value={this.state.Message} onChange={this.OnchangeHandleMessage}/>

                            <button type="submit">Submit</button>
                            
                        </div>
                  </form>
                  
                  
                

              </div>
        )
    }
}
    
export default Contact;
