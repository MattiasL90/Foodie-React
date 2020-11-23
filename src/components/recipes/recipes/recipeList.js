import React from 'react';
import './recipe.css';


class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id = 1,
                    name = "Hamburger",
                    time = "30 min",
                    ingredients = [
                        "400g ground meat",
                        "1 tabelspoon salt",
                        "1 tablespoon pepper",
                        "2 hamburger buns",
                        "2 slices of cheese"
                    ],
                    steps = [
                        "Make patty",
                        "Salt and pepper",
                        "Fry until done",
                        "Top with cheese",
                        "Put in bun"
                    ]
                },
                {
                    id = 2,
                    name = "Pasta Carbonara",
                    time = "25 min",
                    ingredients = [
                        "100g Spaghetti",
                        "1 tabelspoon salt",
                        "1 dl cream",
                        "100g bacon",
                        "1 egg"
                    ],
                    steps = [
                        "Boil spaghetti in salted water",
                        "Fry bacon",
                        "Add cream and egg"
                    ]
                }
            ] 
        }
    }

  render() {
    return(
        <p></p>
    );
  }
}

export default RecipeList;