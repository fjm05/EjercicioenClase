import "./Card.css";

export const Card = ({ nombre, precio, descripcion, imagen }) => {
  //JS
  return (
    //HTML
    <div className="card">
      <h2 className="card__nombre">{nombre}</h2>
      <p className="card__precio">{precio}</p>
      <p className="card__descripcion">{descripcion}</p>
      <img src={imagen}></img>
    </div>
  );
};
