import React from 'react';
import { Image, Col, Button, Glyphicon } from 'react-bootstrap';

class SoloImageWithButton extends React.Component {

  constructor() {
    super();
    this.addOurImage = this.addOurImage.bind(this);
    this.triggerDelete = this.triggerDelete.bind(this);
  }

  addOurImage() {
    this.props.addNewImage(this.props.img);
  }

  triggerDelete(e){
    console.log(this.props.img._id);
    this.props.handleDelete(this.props.img._id);
  }



  render() {
    let ourButton = (
      <Button style={{width:'360px'}}block onClick={this.addOurImage} type="submit"
       className="brn btn-primary">Add To My List</Button>
    );
    let deleteButton = (
      <Button style={{width:'360px'}}block onClick={this.triggerDelete} type="submit"
       className="brn btn-danger"><span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Delete</Button>
    );

    return (
       <Col lg={4} md={4} sm={2} key={this.props.img.name}>
         <img className="gifs" src={this.props.img.url}></img>
         {this.props.addButton ? deleteButton : ourButton}
         <h3>{this.props.img._id}</h3>
       </Col>

    );
  }
}



SoloImageWithButton.propTypes = {
  user: React.PropTypes.object,
  imageStore: React.PropTypes.object,
  img: React.PropTypes.object,
  addNewImage: React.PropTypes.func,
  addButton: React.PropTypes.bool,
  handleSubmit: React.PropTypes.func,
  deleteButton: React.PropTypes.bool,
  handleDelete: React.PropTypes.func,
  triggerDelete: React.PropTypes.func
};


export default SoloImageWithButton;
