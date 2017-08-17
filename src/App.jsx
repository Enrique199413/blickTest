import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import click from './blickUtils.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Rectangle-12">
          <p className="nav-item Neue">Vendedores</p>
          <p className="nav-item Neue">Compradores</p>
          <p className="nav-item Neue">Registrate</p>
          <p className="nav-item Neue">Inicia sesion</p>
          <a onClick={click}><p className="nav-item button-blick Neue">Contacto</p></a>
        </div>
        <div className="edificios">
          <div className="content">
            <h2 className="titulo_content Neue">Vende o compra Propiedades</h2>
            <h3 className="titulo_subtitle Neue">¡Sin comisión de corredores!</h3>
          </div>
        </div>
        <div className="como">
          <p className="como_text NeueB">¿Comó funciona?</p>
        </div>
        <section className="table">
          <div className="table_col-title">

          </div>
          <div className="table_col border_t">
              <div>
                <img src="./assets/cierralo_logo.png" className="table_img" alt=""/>
                <p className="img_footer orange Neue">Costo Fijo</p>
              </div>
            <div className="table_vs">
              <p className=" Neue white_txt">VS.</p>
              </div>
            <div >
              <img src="./assets/seman.png" className="table_img" alt=""/>
              <p className="img_footer grey Neue nomt "> Comisión del  3% al 5% </p>
            </div>
          </div>
        </section>
        <section className="table">
          <div className="table_col-title">
            <p className="tableTitle">
              Conoce
            </p>
          </div>
          <div className="table_col border_t">
            <div className="txtContent">
              <p className="orange-table-text Neue">Conoce y controla todos los pasos del proceso de compra o venta de tu propiedad </p>
            </div>
            <div className="txtContent">
            <p className="grey-table-text Neue">Carecen de experiencia profesional y estructura de un proceso de compra-venta</p>
            </div>
          </div>
        </section>
        <section className="table">
          <div className="table_col-title">
            <p className="tableTitle">
              Determina
            </p>
          </div>
          <div className="table_col">
            <div className="txtContent">
              <p className="orange-table-text Neue">Determina el precio de tu propiedad con ayuda de nuestros análisis de mercado cuantitativos</p>
            </div>
            <div className="txtContent">
            <p className="grey-table-text Neue">Su determinación de precio no cuenta con sustento y existe un conflicto te interés por determinar un precio bajo con el fin de vender tu propiedad</p>
            </div>
          </div>
        </section>

        <div className="content">
          <div className="buttons border_t">
            <h3 className="como_text NeueB">¡Regístrate!</h3>
            <div className="btn-group">
              <a className="btn btn-orange"><p>Comprar</p></a>
              <a className="btn btn-yell"><p>Vender</p></a>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="preFooter">
            <img src="./assets/cierralo_logo.png" className="content_item table_img bor" alt=""/>
            <div className="content_item contact">
              <ul>
                <li className="Neue">Contacto</li>
                <li className="Neue">Preguntas frecuentes</li>
                <li className="Neue"> Acerca de nosotros</li>
              </ul>
            </div>
            <div className="content_item info">
              <p className="Neue">info@cierralo.com</p>
              <p className="Neue">(55) 4567 4323</p>
              <img src="./assets/group-8@2x.png" className="sm-icon" alt=""/>
            </div>
            <div className="content_item sell">
              <p className="Neue">Conviértete en Vendedor</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
