import React from "react";

const Cards = ({item}) => {
  return (
    <>
      <div className="card bg-base-100 w-80 hover:scale-105 duration-300">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
