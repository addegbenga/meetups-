import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AddMeetup extends React.Component {
  AddMeetup(newMeetup) {
    axios
      .request({
        method: "post",
        url: "http://localhost:3000/api/meetups",
        data: newMeetup
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  onSubmit = e => {
    e.preventDefault();
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    };
    this.AddMeetup(newMeetup);
   
  };
  render() {
    return (
      <div>
        <Link className='btn grey' to='/'>
          Back
        </Link>
        <div>
          <h1>Add meetup</h1>
          <form onSubmit={this.onSubmit}>
            <div className='input-field'>
              <input type='text' name='name' ref='name' />
              <label htmlFor='name'>Name</label>
            </div>
            <div className='input-field'>
              <input type='text' name='city' ref='city' />
              <label htmlFor='name'>City</label>
            </div>
            <div className='input-field'>
              <input type='text' name='address' ref='address' />
              <label htmlFor='name'>Address</label>
            </div>
            <input type='submit' value='Save' className='btn' />
          </form>
        </div>
      </div>
    );
  }
}
export default AddMeetup;
