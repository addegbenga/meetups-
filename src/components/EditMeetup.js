import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditMeetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      city: "",
      address: ""
    };
  }

  componentDidMount() {
    this.getMeetupDetails();
  }
  getMeetupDetails() {
    let meetupId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            name: response.data.name,
            city: response.data.city,
            address: response.data.address
          },
          () => {
            // console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

//save the new edited form
editMeetup(newMeetup) {
    axios
      .request({
        method: "put",
        url: `http://localhost:3000/api/meetups/${this.state.id}`,
        data: newMeetup
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    };
    this.editMeetup(newMeetup);
   
  };

  render() {
    return (
      <div>
        <Link className='btn grey' to='/'>
          Back
        </Link>
        <div>
          <h1>Edit meetup</h1>
          <form onSubmit={this.onSubmit}>
            <div className='input-field'>
              <input
                type='text'
                name='name'
                ref='name'
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <label htmlFor='name'>Name</label>
            </div>
            <div className='input-field'>
              <input
                type='text'
                name='city'
                ref='city'
                value={this.state.city}
                onChange={this.handleInputChange}
              />
              <label htmlFor='name'>City</label>
            </div>
            <div className='input-field'>
              <input
                type='text'
                name='address'
                ref='address'
                value={this.state.address}
                onChange={this.handleInputChange}
              />
              <label htmlFor='name'>Address</label>
            </div>
            <input type='submit' value='Save' className='btn' />
          </form>
        </div>
      </div>
    );
  }
}
export default EditMeetup;
