import React from 'react';
import { observer, inject } from 'mobx-react';
import DisplayGifs from './DisplayGifs';


class Home extends React.Component {

  constructor() {
    super();

    this.loadGifsFromServer = this.loadGifsFromServer.bind(this);
  }

  componentDidMount(){
    this.loadGifsFromServer();
  }

  loadGifsFromServer() {
    fetch('/gifs')
       .then(result => result.json())
       .then(data => this.props.imageStore.setImages(data));
  }

  render(){
    return (
        <div>
          <h2>{this.props.userStore.username}, welcome to your Giphy Site!</h2>
          <DisplayGifs gifs={this.props.imageStore.images}/>
        </div>
      );
  }
}

Home.propTypes = {
  imageStore: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default inject('userStore', 'imageStore')(observer(Home));
