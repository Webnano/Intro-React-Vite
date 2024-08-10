
    
        const CardPizza = ({ name, price, image, ingredients }) => {
            return (
              <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <hr></hr>
                  <p className="card-text">Ingredientes: {ingredients}</p>
                  <hr></hr>
                  <p className="card-text"><em>Precio: ${price.toLocaleString('es-CL')}</em></p>
                  <div className="d-flex justify-content-around">
                  <button className="btn btn-default style border">Ver más <i class="fa-regular fa-eye"></i></button>
                  <button className="btn btn-dark">Añadir <i class="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            );
          };
    


export default CardPizza;