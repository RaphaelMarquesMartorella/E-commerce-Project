import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Carrinho from '../../assets/carrinhoCompras.png'


const StoreSection = ({ facility }) => {
  

  return (
    <div>
      <div className="all--sides">
        <div className="left--side">
            
          <img src={facility.imgPath} alt={facility.title} />
          <div className="left--side__title">
            <p>{facility.title}</p>
          </div>
          <div className="left--side__description">
            <h3>Descrição</h3>
            <p>{facility.description}</p>
          </div>
        </div>

        <div className="right--side">
          <div className="right--side__title">
            <h1>{facility.title}</h1>
          </div>

          <div className="price--color">
            

            
            <h2>R$: {facility.price}</h2>
            {(facility.color)  && 
            <div>
            <p
              style={{
                backgroundColor: facility.color,
              }}
            ></p> 
            </div>}
          
            
          </div>
          
          <div className="button">
            
          <button>
          
          <Link to={`/shopCart/${facility._id}`}>Adicionar ao carrinho</Link>
          </button>
          <img src={Carrinho} alt="Carrinho de compras" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
