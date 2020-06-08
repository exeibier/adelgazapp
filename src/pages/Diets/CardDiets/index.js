import React from 'react';


//CSS
import './CardDiets.css'



function CardDiets({ typeFood, recipe, gramos, ingredient}) {
    return (
        <div>
        <table class="table p-5">
            <thead>
                <tr >
                    <th className='border-0 ' scope="col">{typeFood}</th>
                    <th className='border-0 ingredient' scope="col">{recipe}</th>
                    <th className='border-0' scope="col">{gramos}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='border-0' scope="row"> <img className='icon-food' src='../img/food.png'></img></th>
                    <td className='border-0 ingredient'>{ingredient}</td>
                    <td className='border-0'>{gramos}</td>
                </tr>
                <tr>
                    <th className='border-0' scope="row"></th>
                    <td className='border-0 ingredient'>{ingredient}</td>
                    <td className='border-0'>{gramos}</td>
                </tr>
                <tr>
                    <th className='border-0' scope="row"></th>
                    <td className='border-0 ingredient'>{ingredient}</td>
                    <td className='border-0'>{gramos}</td>

                </tr>
            </tbody>
        </table>
        </div>


    );
}
export default CardDiets;