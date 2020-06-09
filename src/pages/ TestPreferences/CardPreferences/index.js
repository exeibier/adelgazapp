import React from 'react';


//CSS
import './CardPreferences.css'



function CardPreferences({ typePlan, descriptionPlan }) {
    return (
        <div class="card  card-preferences">
            <div class="card-body">
                <div class="card" >
                    <div class="card-body ">
                        <div class="form-check">
                            <input class="form-check-input input-preferences " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                            <label>{typePlan}</label>
                        </div>
                        <div>
                            <p className='diet'>{descriptionPlan}</p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
export default CardPreferences;