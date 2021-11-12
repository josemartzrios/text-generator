import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import data from './data';

function App() {


  // inicializo mis states count y text 
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);


  // función handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // si imprimimos en la consola el tipo de dato que es el state count nos arroja un string
    // console.log(typeof count)

    // guardamos en amount nuestro state count convertido a number
    let usersParagraphs = parseInt(count);

    // Para evitar el -1 o la petición de más de ocho parrafos
    if(count <= 0){
      usersParagraphs = 1
    }

    if(count > 8){
      usersParagraphs = 8
    }

    // pasamos toda la información de data a text
    // Aplico el método slice para que me retorno los parrafos que necesite mi usuario (amount) y comenzando desde cero
    setText(data.slice(0, usersParagraphs));

  }

  return <>
    
    <section className='section-center'>
    
      <h1>TEXTO DE PRUEBA</h1>

      {/* form con el evento handleSubmit */}
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Párrafos:
        </label>
        {/* Input con el evento onChange para que guarde el valor del input en mi setCount state */}
        <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}></input>
        <button type='submit' className='btn'>Generar párrafo</button>
      </form>

      <article className='lorem-text'>
        {/* aplicamos el metodo map a text para retornar nuestros párrafos */}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  </>
}

export default App;
