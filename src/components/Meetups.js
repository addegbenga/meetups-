import React, { Component } from "react";
import axios from "axios";
import MeetupItem from "./MeetupItem";

class Meetups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Meetups: []
    };
  }
  componentDidMount() {
    this.getMeetups();
  }
  getMeetups = () => {
    axios.get("http://localhost:3000/api/meetups").then(response => {
      this.setState(
        {
          Meetups: response.data
        },
        () => {
          //   console.log(this.state)
        }
      );
    })
    .catch(err => console.log(err))
  };
  render() {
    const meetupItems = this.state.Meetups.map((meetup, i) => {
      return <MeetupItem key={meetup.id} item={meetup} />;
    });
    return (
      <div>
        <h1>Meetups</h1>
        <ul className='collection'>{meetupItems}</ul>
      </div>
    );
  }
}

export default Meetups;
