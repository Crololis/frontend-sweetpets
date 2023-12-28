// import "bulma/css/bulma.css"
import "./index.sass"
import "./index.sass"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CadastroProd from "./components/CadastroProduto"
import AnimaisList from "./components/AnimaisList.jsx"
import Container from "./components/Container.jsx"
import Containerr from "./components/Containerr.jsx"
import Navbarr from "./components/Navbarr"
import Navbar from "./components/Navbar"
import Carrinho from "./components/Carrinho"
// import ProdList from "./components/ProdList.jsx"
import Footer from "./components/Footer.jsx"
import Carrossel from "./components/Carrossel.jsx"
// import Login from "../src/components/Cadastro";
// import Cadastro from "../src/components/Cadastro";
import Filter from "./components/FIlter"
import NavHome from "./components/NavHome"
import TeladeProdutos from "./components/TelaProdutos.jsx"
// import Search from "./components/Search.jsx"
import DetailsPet from "./components/DetailsPet.jsx"
import DetailsProd from "./components/DetailsProd.jsx"


function App() {

    return (

        <BrowserRouter>
        <Routes>
            {/* <Route path="/Login" element = {<Login/>}/> */}
            {/* <Route path="/Cadastro" element = {<Cadastro/>}/> */}

            {/* =================================================== */}
            {/* <Route path="/filter" element = {<Filter/>}/> */}
            <Route path="/teladeprodutos" element = {<><Navbarr/><Filter/><TeladeProdutos/></>}/>
            <Route path="/carrinho" element = {<><Navbar/><Carrinho/></>}/>
            <Route path="/animal/:id" element= {<DetailsPet/>} />
            <Route path="/produto/:id" element= {<DetailsProd/>} />
            {/* <Route path="/Search" element = {<Search/>}/> */}
            <Route path="/prod" element = {<><Navbarr/><CadastroProd/></>}/>
            <Route path="/" element={<><NavHome/><Containerr/></>}/>
            <Route path= "/Detalhedoproduto" element = {<DetailsProd/>} />
            <Route path="/add" element={<><Navbar/><Container/></>}/>
        </Routes>
        </BrowserRouter>
        // <div className="app">

        //     {/* <Navbar /> */}
            
        // <AnimaisList />
        //     {/* <Container /> */}
        // </div>
    )
}

export default App