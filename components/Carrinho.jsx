import "../estilos/Carrinho.sass"
import lixeira from "../images/lixeira.svg"
import cartões from "../images/bandeiras.png"

function Carrinho() {

    return (

        <main>

            <div className="div_itens">

                <div className="div_quantidade_itens">

                    <span className="frase_itens">Todos os itens (1)</span>
                </div>

                <div className="div_produtos">

                    <div className="div_img_produtos"></div>

                    <div className="div_info_produtos">

                        <span className="nome_produto">Produto só a massa</span>

                        <section className="section_1">

                            <span className="preço_produto">R$54,99</span>

                            <img className="img_lixeira" src={lixeira}
                                alt="Sweet Pets" />
                        </section>
                    </div>
                </div>

                {/* <div className="div_produtos">

                    <div className="div_img_produtos"></div>

                    <div className="div_info_produtos">

                        <span className="nome_produto">Produto só a massa</span>

                        <section className="section_1">

                            <span className="preço_produto">R$54,99</span>

                            <img className="img_lixeira" src={lixeira}
                                alt="Sweet Pets" />
                        </section>
                    </div>
                </div> */}

                {/* <div className="div_produtos">

                    <div className="div_img_produtos"></div>

                    <div className="div_info_produtos">

                        <span className="nome_produto">Produto só a massa</span>

                        <section className="section_1">

                            <span className="preço_produto">R$54,99</span>

                            <img className="img_lixeira" src={lixeira}
                                alt="Sweet Pets" />
                        </section>
                    </div>
                </div> */}

                {/* <div className="div_produtos">

                    <div className="div_img_produtos"></div>

                    <div className="div_info_produtos">

                        <span className="nome_produto">Produto só a massa</span>

                        <section className="section_1">

                            <span className="preço_produto">R$54,99</span>

                            <img className="img_lixeira" src={lixeira}
                                alt="Sweet Pets" />
                        </section>
                    </div>
                </div> */}
            </div>

            <div className="div_pagamentos">

                <div className="div_pagar">

                    <section className="section_2">

                        <span className="nome_totall">Total</span>

                        <span className="preço_total">R$54,99</span>
                    </section>

                    <section className="section_3">
                        <button className="bttn_pagar">Finalizar compra</button>
                    </section>
                    
                 
                </div>
                <div className="div_pagamento">
                   <section className="section_4">

                        <span className="nome_totall">Pagamento</span>
                   <img src={cartões} alt=""className="imagemcart"/>
                    </section>
                    </div>
            </div>
        </main>
    )
}
export default Carrinho