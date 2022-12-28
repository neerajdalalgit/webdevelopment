import React from 'react';
import axios from 'axios';


class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    phone: '',
    village: '',
    message: '',
    posts:[]
  };
  
  componentDidMount = () => {
    this.getBlogPost();
    
  };

  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        
        
        })
        
        
  }
  
  

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  

    
  submit = (event) => {
    event.preventDefault();
 

    const payload = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      village: this.state.village,
      message: this.state.message,
      };
    

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        
        this.getBlogPost();
        
        
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      email: '',
      phone:'',
      village:'',
      message:'',
      });
  };
  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        
      </div>
    ));
  };


  render() {

    console.log('State: ', this.state);
    
    //JSX
    return(
      <div className="app">
        <h2 className='text-center text-warning bg-success mt-1 py-3'>Feel free to ask us anything!</h2>
<p className=' text-center textinfo bg-light font-monospace m-4 '>Have doubt or suggestion to make? Feel free to ask anything. If you have any suggestions, please let me know. Your suggestions are highly appreciated. I appreciate your time and try hard to reply to every single message posted here! Keep dropping your priceless opinions.</p>
        <form autoComplete='off' onSubmit={this.submit}>
          <div className="form-input container text-center text-primary">
          <label>Name:</label>
            <input 
            className='container mt-2 py-2 text-center border-secondary '
              type="text"
              name="name"
              required
              autoFocus
              minLength='3'
              maxLength='20'        placeholder="Enter your name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label className='container pt-2'>Email:</label>
            <input 
            className='container mt-2 py-2 text-center border-warning'
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
              required
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label className='container pt-2'>Phone no.:</label>
            
            <input 
            className='container mt-2 py-2 text-center border-success '
              type="tel"
              name="phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              minLength={10}
              maxLength={10}
              
              required
              placeholder="Enter your phone no."
              value={this.state.phone}
              onChange={this.handleChange}
                           
            />
            <label className='container pt-2'>Village:</label>
            <input 
            className='container mt-2 py-2 text-center border-danger '
              type="text"
              name="village"
              required

              placeholder="Enter your village"
              value={this.state.village}
              onChange={this.handleChange}
            />
          </div>
                              
          <div className="form-input container text-center text-primary">
          <label className='container  text-primary mt-2'>Message:</label>
            <textarea
            className='border-info'
              placeholder="Enter some message"
              type='text'
              name="message"
              required
              minLength='25'
              maxLength='300'
              cols="60"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
            >
              
            </textarea>
          </div>
      <div className='container text-center'>
          <button className=' text-center btn-lg mt-3 text-white bg-black font-monospace py-2'>Send Message</button>
        </div>
        <p className='text-danger text-center container mt-4'>Neeraj dalal<br/>Full Stack Web Developer</p>
        </form>
        

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
    </div>
      </div>
    );
  }
    
}


export default Contact;