import React from "react";
import { Link } from "react-router-dom";

class MeetupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }
  render() {
    const { item } = this.state;
    return (
      <Link to={`/meetups/${this.state.item.id}`}>
        <li className='collection-item'>{item.name}</li>
      </Link>
    );
  }
}
export default MeetupItem;
