import React from 'react';
import './recipe.css';


class Recipe extends React.Component {
  render() {
    return(
        <div className="recipe">
            <div className="recipeSteps">
                <p></p>
            </div>

            <div className="recipeInfo">
                <h1>{ this.props.recipes.name }</h1>
                <p><b>Time:</b> {this.recipes.time }</p>
                <p><b>Ingredients:</b></p>
                <ul className="recipeList">
                    <li>400g ground meat</li>
                    <li>1 tabelspoon salt</li>
                    <li>1 tablespoon pepper</li>
                    <li>2 slices of cheese</li>
                    <li>2 hamburger buns</li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Recipe;