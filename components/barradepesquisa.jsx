import React, { useState } from 'react';
import "../estilos/BarraDePesquisa.sass";
import searchh from "../assets/images/search_circle.svg";
// import axios from "axios"
import {useEffect } from 'react'

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearch = () => {
  //   // Verifica se onSearch é uma função antes de chamar
  //   if (typeof onSearch === 'function') {
  //     onSearch(searchTerm);
  //   } else {
  //     console.error('onSearch não é uma função válida');
  //   }
  // };

  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search !== "") {
      fetch(`http://localhost:3004/prod?q=${search}`)
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }, [search])

  return (
    <div className='divDaBarra'>
      <input
        className='barra'
        type="text"
        placeholder="O que seu pet precisa?"
        value={search}
        onChange={handleChange}
      />
      <div className="result-search">{
        searchData.map((data, index) => {
          return <NavLink to={`/teladeprodutos`} key={index}>
            {data.prod.nome_produto}
          </NavLink>
        })
      }</div>
      <button className='botaoPesquisar'>
        <img src={searchh} alt="procurar" />
      </button>
      <div className="dropdown-content"></div>
    </div>
  );
};

export default SearchBar;