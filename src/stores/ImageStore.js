import {extendObservable} from 'mobx';

export default class ImageStore {
  constructor(){
    extendObservable(this, {
      images: []
    });
    this.addNewImage = this.addNewImage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setImages = this.setImages.bind(this);
  }

  handleDelete(imgId) {
    let newList = this.images.filter(img => img._id !== imgId);
    this.images = newList;
    fetch('/gifs/' + imgId, {
      method: 'DELETE'
    });
  }

  addNewImage(img) {
    console.log(img.userId, "userId");
    fetch('/gifs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: img.name,
        url: img.url,
        description: img.description,
        userId: img.userId
      })
    })
    .then(result => result.json())
    // .then(result => {img._id = result._id;})
    .then(image => {
      let allImages = this.images;
      allImages.push(image);
      this.images = allImages;
    });
  }


  setImages(images) {
    this.images = images;
  }
}
