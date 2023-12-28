
import '../estilos/Container.sass'
import { useState } from 'react'
import pets from '../images/pets.png'
import Input from './Inputs/Input.jsx'
import Input2 from './Inputs/Input_2.jsx'
import Textarea from './Inputs/Textarea.jsx'
import axios from "axios"
//import url_fixa from '../../Axios/UrlFixa.js'
import toastError from './Toasts/ToastError.js'
import toastSucess from './Toasts/ToastSucess.js'

function Container() {
  const [img, setImg] = useState()

  const [pet, setPet] = useState({
    nome: '',
    file: '',
    sexoDoBichinho: '',
    idade: '',
    porte: '',
    estado: '',
    cidade: '',
    especie: '',
    telefone: '',
    descricao: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append('sexoDoBichinho', pet.sexoDoBichinho)
      formData.append('foto', pet.file)
      formData.append('nome', pet.nome)
      formData.append('porte', pet.porte)
      formData.append('idade', pet.idade)
      formData.append('cidade', pet.cidade)
      formData.append('estado', pet.estado)
      formData.append('especie', pet.especie)
      formData.append('descricao', pet.descricao)
      formData.append('telefone', pet.telefone)

      await axios.post('http://localhost:3004/animais', formData, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      toastSucess()
      console.log(pet)
    } catch (e) {
      toastError()
      console.log(e)
      console.log(pet)
    }
  }

  function handleChange(nameInput, valueInput) {
    const { name, valor } = { name: nameInput, valor: valueInput }
    setPet({
      ...pet,
      [name]: valor,
    })
  }

  function handleImage(e) {
    if (e.target.files[0]) {
      const [image] = e.target.files
      const photo = URL.createObjectURL(image)
      setImg(photo)
      setPet({ ...pet, file: e.target.files[0] })
    }
  }

  return (
    <main>
      <div className="div_img_containeer">
        <img src={pets} alt="Sweet Pets" className="img_petts" />
      </div>

      <div className="div_forrm">
        <h1 className="h1_cadastrar_pets">Cadastre um pet para adoção</h1>

        <form method="post" className="form_cadastrar">
          <div className="div_nome_pet">
            <label className="label" htmlFor="input_nome_pet">
              Nome do pet
            </label>

            <Input
              type="text"
              name="nome"
              id="input_nome_pet"
              value={pet.nome}
              onChange={(e) => {
                handleChange('nome', e.target.value)
              }}
            />
          </div>

          <div className="div_espécie_sexo_pet">
            <section>
              <label className="label" htmlFor="input_espécie_pet">
                Espécie:
              </label>

              <Input
                type="text"
                name="especie"
                id="input_espécie_pet"
                value={pet.especie}
                onChange={(e) => {
                  handleChange('especie', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_sexo_pet">
                Sexo:
              </label>

              <Input
                type="text"
                name="sexoDoBichinho"
                id="input_sexo_pet"
                value={pet.sexoDoBichinho}
                onChange={(e) => {
                  handleChange('sexoDoBichinho', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_idade_porte_pet">
            <section>
              <label className="label" htmlFor="input_idade_pet">
                Idade:
              </label>

              <Input
                type="text"
                name="idade"
                id="input_idade_pet"
                value={pet.idade}
                onChange={(e) => {
                  handleChange('idade', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_porte_pet">
                Porte:
              </label>

              <Input
                type="text"
                name="porte"
                id="input_porte_pet"
                value={pet.porte}
                onChange={(e) => {
                  handleChange('porte', e.target.value)
                }}
              />
            </section>
          </div>
          <section>
              <label className="label" htmlFor="input_porte_pet">
                Telefone para Contato:
              </label>

              <Input
                type="text"
                name="porte"
                id="input_porte_pet"
                value={pet.telefone}
                onChange={(e) => {
                  handleChange('telefone', e.target.value)
                }}
              />
            </section>
          <div className="div_estado_cidade_pet">
            <section>
              <label className="label" htmlFor="input_estado_pet">
                Estado:
              </label>

              <Input
                type="text"
                name="estado"
                id="input_estado_pet"
                value={pet.estado}
                onChange={(e) => {
                  handleChange('estado', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_cidade_pet">
                Cidade:
              </label>

              <Input
                type="text"
                name="cidade"
                id="input_cidade_pet"
                value={pet.cidade}
                onChange={(e) => {
                  handleChange('cidade', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_file_comentar">
            <section>
              <span className="span_1">Adicione fotos:</span>

              <label
                tabIndex="0"
                className="label_file"
                htmlFor="input_file_pet"
              >
                <img className="img_file" src={img} alt="Clique aqui" />
              </label>

              <Input2
                type="file"
                name="foto_pet"
                accept="images/*"
                id="input_file_pet"
                value={pet.foto}
                onChange={(e) => {
                  handleImage(e)
                }}
              />
            </section>

            <section className="section">
              <span className="span_2">Conte um pouco sobre o pet:</span>

              <Textarea
                name="descricao"
                value={pet.descricao}
                onChange={(e) => {
                  handleChange('descricao', e.target.value)
                }}
              />
            </section>
          </div>
          <button onClick={(e) => handleSubmit(e)} className='buutão'>Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default Container