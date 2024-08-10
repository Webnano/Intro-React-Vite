
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const pizzas = [
    { name: ' Pizza Napolitana', price: 6950, image: '/public/img/pizza1.jpg', ingredients: 'mozzarella, tomates, jamon, oregano ' },
    { name: 'Pizza Española', price: 6950, image: '/public/img/pizza2.jpg', ingredients: 'mozzarella, gorgonzola, parmesano, provolone ' },
    { name: 'Pizza Pepperoni', price: 6950, image: '/public/img/pizza3.jpg', ingredients: 'mozzarella, pepperoni, oregano ' },
  ];

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around">
        {pizzas.map((pizza, index) => (
          <CardPizza key={index} name={pizza.name} price={pizza.price} image={pizza.image} ingredients={pizza.ingredients}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
