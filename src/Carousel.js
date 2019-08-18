import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["https://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  //use arrow function bc it will not create a new context and this still has same bind
  handleIndexClick = event => {
    this.setState({
      // the plus will trun the returned string from dataset into a number
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? "active" : ""}
              src={photo}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
