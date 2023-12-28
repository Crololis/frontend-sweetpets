import "../estilos/Filter.sass"


const Filter = ({filter, setFilter}) => {

    return (
      <div className="filter">
  


          <div className="filterr">
          <div className="filtro">Filtro</div>
          <h3 className="p_filter">Categoria</h3>
         
             <div className="Categoria">
                  <li>  <input type="radio" value="Todos" />Todos</li>
                  <li>  <input type="radio" value="Higiene" />Higiene</li>
                  <li>  <input type="radio" value="Ração" />Ração</li>
                  <li>  <input type="radio" value="Vestimenta" />Vestuário</li>
                  <li>  <input type="radio" value="Brinquedos" />Brinquedos</li>
                  </div>
                  <h3 className="p_filter">Preço</h3>
            <div className="Preço">
                 
                <li> <input type="radio" value="Até R$50" />Até R$50</li> 
                <li>  <input type="radio" value="Até R$100" />Até R$100</li>
                <li>  <input type="radio" value="Até R$200" />Até R$200</li>
                <li>  <input type="radio" value="Até R$300" />Até R$300</li>
                  
            </div>
            <h3 className="p_filter">Tamanho</h3>
            <div className="Tamanho">
            
                 <li> <input type="radio" value="PP" />PP</li>
                 <li> <input type="radio" value="P" />P</li>
                 <li> <input type="radio" value="M" />M</li>
                 <li> <input type="radio" value="GG" />GG</li>
                  
            </div>
          </div>
      </div>
    )
  }
  
  export default Filter