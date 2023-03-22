import React, { useEffect, useState } from "react";

import "./index.scss";
import Logo from "../../assets/logoDNC.png";
import Carrinho from "../../assets/carrinhoCompras.png";
import Lupa from "../../assets/lupa.png";
import { Link } from "react-router-dom";
import StoreSection from "../StoreSection/StoreSection";

const StoreHeader = ({ data }) => {

  function descerPagina() {
    window.scrollTo(0, 20);
  }

  function descerPaginaJogos() {
    window.scrollTo(0, 440);
  }

  function descerPaginaVideoGames() {
    window.scrollTo(0, 120);
  }

  const [allowSearch, setAllowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(e.target[0].value);
    console.log(searchValue);
    data.map((item) => {
      searchValue == item.title && setAllowSearch(true);
    });
    if(searchValue == data[0].title){
      setSearchValue(1)
    }else if(searchValue == data[1].title){
      setSearchValue(2)
    }else if(searchValue == data[2].title){
      setSearchValue(3)
    }else if(searchValue == data[3].title){
      setSearchValue(4)
    }else if(searchValue == data[4].title){
      setSearchValue(5)
    }else if(searchValue == data[5].title){
      setSearchValue(6)
    }


    console.log(data);
  };

  return (
    <div className="container">
      <div className="header--superior">
        <Link to={"/mainPage"}>
          <img className="logo" src={Logo} alt="Logo DNC" />
        </Link>
        <img className="lupa" src={Lupa} alt="Lupa de busca" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="O que você está procurando?" />

          {allowSearch && (
            <Link to={`/carrinho/${searchValue}`}>
              <button style={{visibility:'hidden', display:'none'}}></button>
            </Link>
          )}
          <button>
            <Link to={`/carrinho/1`}>
              <img
                className="carrinho"
                src={Carrinho}
                alt="Carrinho de compras"
              />
            </Link>
          </button>
        </form>
      </div>
      <div className="header--inferior">
        <h3 onClick={descerPagina} className="font--bold">Novidades</h3>
        <h3 onClick={descerPaginaJogos}>Jogos</h3>
        <h3 onClick={descerPaginaVideoGames}>Video Games</h3>
        <h3>Mesas Gamer</h3>
        <h3>Promoções</h3>
        <h3>Atendimento</h3>
      </div>
    </div>
  );
};

export default StoreHeader;
