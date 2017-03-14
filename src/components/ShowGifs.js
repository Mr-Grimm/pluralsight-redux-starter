import React from 'react';
import SoloImageWithButton from './SoloImageWithButton';
import { observer, inject } from 'mobx-react';

class ShowGifs extends React.Component {
  constructor() {
    super();
  }

  render () {
    let props = this.props;
    let images = this.props.gifs.filter( img => {
      console.log(props.userStore.userId, img.userId);
      return props.addButton ? props.userStore.userId == img.userId : true;
    });
    images = images.map(function(img) {
      return (
        <SoloImageWithButton key={img._id} img={img}
          addNewImage={props.addNewImage} addButton={props.addButton}
          handleSubmit={props.handleSubmit} handleDelete={props.handleDelete}
          deleteButton={props.deleteButton}
        />
      );
    });


    return (
       <div>
        {images}
       </div>
      );
  }
}

ShowGifs.propTypes = {
  userStore: React.PropTypes.object,
  gifs: React.PropTypes.object,
  addNewImage: React.PropTypes.func,
  addButton: React.PropTypes.bool,
  handleSubmit: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  deleteButton: React.PropTypes.bool
};

export default inject('userStore')(observer(ShowGifs));
