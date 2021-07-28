import React, {useEffect, useState} from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas}) {
  // const [pizzas, setPizzas] = useState([])

  // const API = "http://localhost:3001/pizzas"

  // useEffect(() => {
  //   fetch(API)
  //   .then(response => response.json())
  //   .then(pizzas => setPizzas(pizzas))
  // }, [])

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map((pizza) => {
            return < Pizza
              key={pizza.id}
              topping={pizza.topping}
              size={pizza.size}
              vegetarian={pizza.vegetarian}
            />
          })
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
