import React from 'react';
import Popup from "reactjs-popup";
import './Log.css';

class Log extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signInEmail: '',
        signInPassword: ''
      }
    }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://recruitment-api.pyt1.stg.jmr.pl/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        login: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(res => res.json())
      .then(data =>console.log(data.status))
      
      .catch(err => console.log(err))
     
  }
  
  render() {
    return (
    <Popup
        trigger={<button className="btn" id="login-btn">Enter the gates</button>}
        modal
        contentStyle={{width:"350px", height:"350px", border: " 2px solid black"}}
      >
          {close => (<div className="login-pad">

              <p>Are you a Mountain Knight</p>

              <div className="submit-form"> 

                <input
                  placeholder="Email"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>

              <div className="submit-form">

                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>

              <div className="submit-button-div">
                <input
                  className='btn'
                  id="submit-btn"
                  onClick={this.onSubmitSignIn}
                  type="submit"
                  value="Log in"
                />
              </div>
              </div>

            )}
          </Popup>  
    )}
}

export default Log;