import React from "react";
import '../hojas-de-estilo/testimonio.css'


function Testimonio(props){


  return(

    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
       src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
       alt="foto de rengoku" />
        <div className="contenedor-texto-testimonio">
         <p className="nombre-testimonio">
           <strong>{props.nombre}</strong> en {props.pais}
           </p>
         <p className="cargo-testimonio">{props.cargo}</p>
         <p className="texto-testimonio">"{props.testimonio}"</p> 
        </div>
    </div>
  );  
 
}
export default Testimonio;
