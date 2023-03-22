import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Carrinho from '../../assets/carrinhoCompras.png'


const StoreSection = ({ data, selectedProducts }) => {
  console.log(data);

  return (
    <div>
      <div className="all--sides">
        <div className="left--side">
            
          <img src={selectedProducts.imgPath} alt={selectedProducts.title} />
          <div className="left--side__title">
            <p>{selectedProducts.title}</p>
          </div>
          <div className="left--side__description">
            <h3>Descrição</h3>
            <p>{selectedProducts.description}</p>
          </div>
        </div>

        <div className="right--side">
          <div className="right--side__title">
            <h1>{selectedProducts.title}</h1>
          </div>

          
          <div className="price--color">
            
            <h2>{selectedProducts.price}</h2>
            
            <h3>Cor: {selectedProducts.colorName}</h3>
            <p
              style={{
                backgroundColor: selectedProducts.color,
              }}
            ></p>
            
          </div>
          
          <div className="button">
            
          <button>
          
          <Link to={`/carrinho/${selectedProducts.id}`}>Adicionar ao carrinho</Link>
          </button>
          <img src={Carrinho} alt="Carrinho de compras" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
