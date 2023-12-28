import '../estilos/DetailsProd.sass'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"
// import coração from './images/coração.svg'
// import estrela from './images/estrela.svg'
// import carrinho from './images/carrinho.svg'


const DetailsProd = ({ match }) => {


    const {id} = useParams();
    const [produto, setProduto] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProdutin = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:3004/prod/${id}`)
            setProduto(await response.json())
            setLoading(false);
        }
        getProdutin()
    }, []);

    const Loading = () => {
        return (
            <>
                Loading........
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
              <div className='mainn'>
            <Navbar />
              
                    <div className="divvv_img_produto">
                        <div className="divvv_foto_produto"></div>
                    </div>

                    <div className="divvv_info_produto">
                        <div className="divvv_avaliações">
                            <div className="divvv_fundo_coração" >
                                <img className="img_heartt" src="" alt="Sweet Pets" />
                            </div>

                            <button className="btnn_avaliação">
                                <span className="média_avaliaçãoo">
                                    <img className="img_estrelaa" src="" alt="Sweet Pets" />
                                    4.8
                                </span>

                                <span className="número_avaliaçãoo">18</span>
                            </button>
                        </div>

                        <div className="divvv_nome_preço_produto">
                            <span className="noome_produto">{produto.nome_produto}</span>

                            <span className="preço_produtoo">{produto.preco_produto}</span>
                        </div>

                        <div>
                            <span className="noome_detalhes">Detalhes</span>

                            <div className="divvv_detalhes_1">
                                <button className="noome_durável">Durável</button>
                                <button className="noome_algodão">Algodão</button>
                            </div>

                            <div className="divvv_detalhes_2">
                                <button className="noome_cruelty_free">Cruelty-free</button>
                            </div>
                        </div>

                        <button className="btnn_adicionar">
                            <img className="carrinho_btnn" src="" alt="Sweet Pets" />

                            <span className="spann_btn">Adicionar ao carrinho</span>
                        </button>
                    </div>

                    <div className="divvv_promoção">PROMOCIONAL</div>
                </div>
            </>
        )
    }
    return (

        <main>
            <div className="row"> {loading ? <Loading /> : <ShowProduct />}
            </div>
        </main>
    )
}

export default DetailsProd


//=================== Parte que funciona com BD =================//
// const DetailsProd = ({ match }) => {


//     const {id} = useParams();
//     const [produto, setProduto] = useState([]);
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         const getProdutin = async () => {
//             setLoading(true);
//             const response = await fetch(`http://localhost:3004/prod/${id}`)
//             setProduto(await response.json())
//             setLoading(false);
//         }
//         getProdutin()
//     }, []);

//     const Loading = () => {
//         return (
//             <>
//                 Loading........
//             </>
//         )
//     }

//     const ShowProduct = () => {
//         return (
//             <>
//               <div className='mainn'>
//             <Navbar />
              
//                     <div className="divvv_img_produto">
//                         <div className="divvv_foto_produto"></div>
//                     </div>

//                     <div className="divvv_info_produto">
//                         <div className="divvv_avaliações">
//                             <div className="divvv_fundo_coração" >
//                                 <img className="img_heartt" src="" alt="Sweet Pets" />
//                             </div>

//                             <button className="btnn_avaliação">
//                                 <span className="média_avaliaçãoo">
//                                     <img className="img_estrelaa" src="" alt="Sweet Pets" />
//                                     4.8
//                                 </span>

//                                 <span className="número_avaliaçãoo">18</span>
//                             </button>
//                         </div>

//                         <div className="divvv_nome_preço_produto">
//                             <span className="noome_produto">{produto.nome_produto}</span>

//                             <span className="preço_produtoo">{produto.preco_produto}</span>
//                         </div>

//                         <div>
//                             <span className="noome_detalhes">Detalhes</span>

//                             <div className="divvv_detalhes_1">
//                                 <button className="noome_durável">Durável</button>
//                                 <button className="noome_algodão">Algodão</button>
//                             </div>

//                             <div className="divvv_detalhes_2">
//                                 <button className="noome_cruelty_free">Cruelty-free</button>
//                             </div>
//                         </div>

//                         <button className="btnn_adicionar">
//                             <img className="carrinho_btnn" src="" alt="Sweet Pets" />

//                             <span className="spann_btn">Adicionar ao carrinho</span>
//                         </button>
//                     </div>

//                     <div className="divvv_promoção">PROMOCIONAL</div>
//                 </div>
//             </>
//         )
//     }
//     return (

//         <main>
//             <div className="row"> {loading ? <Loading /> : <ShowProduct />}
//             </div>
//         </main>
//     )
// }

// export default DetailsProd