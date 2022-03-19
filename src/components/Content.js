import React from "react";

const Content = (props) => {
  return (
    <div className="content">
      <div className="image-content">
        <img src={`${props.imageUrl}`} alt="gambar tempat" className="image" />
      </div>

      <div className="description">
        <div className="description-head">
          <span>🚩 {props.location} </span>
          <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
          <h2>{props.title}</h2>
        </div>

        <div className="description-body">
          <h5>
            {props.startDate} - {props.endDate}
          </h5>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
