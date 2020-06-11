import React, {Component} from 'react';

//CSS
import './CardTest.css'

export default class CardTest extends Component {
    constructor(props){
        super(props)
        this.state={
          age:'',
          gender:'hombre',
          diameter: undefined,
          height: undefined,
          weight: undefined,
          exercice:'pocoActivo',
          fatPercantage:'pesoNormal',
          objective: 'dietaPerderPeso'
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleFormSubmit(event){
      event.preventDefault();
      console.log(this.state)
    }
    handleInput({ target: { name, value } }){
      this.setState({
        [name]:value
      })

    }
    handleSelect ({ target: { name, value } }){
      this.setState({
        [name]: value
      })
    }

    render(){
      const {age,gender, diameter, height,weight, exercice, fatPercantage, objective } = this.state
      return (
        <form className="border border-dark p-3 rounded test-form" onSubmit={this.handleFormSubmit}>
                            <ol>
                                <li className='data-form'>
                                    ¿Qué edad tienes?
                                        </li>
                                <div className='form-group'>
                                    <input className=" form-control info-test " placeholder="Edad"
                                       type={'text'}
                                       value={age}
                                       onChange={this.handleInput}
                                       name={'age'}
                                    ></input>
                                </div>
                                <li className='data-form'>
                                    ¿Eres hombre mujer?
                                         </li>
                                <div className='d-flex justify-content-between form-group'>
                                  <select class="form-control" name={'gender'} value={gender} onChange={this.handleSelect}>
                                    <option value='hombre'>Hombre</option>
                                    <option value='mujer'>Mujer</option>
                                  </select>
                                </div>                              

                                <li className='data-form'>
                                    ¿Cuál es el diametro de tu muñeca?
                                </li>
                                <div className='form-group'>
                                    <input className=" form-control info-test " placeholder="cm" 
                                       type={'number'}
                                       value={diameter}
                                       onChange={this.handleInput}
                                       name={'diameter'}
                                    ></input>
                                </div>
                                <li className='data-form'>
                                    ¿Cual es tu altura?
                                        </li>
                                <div className='form-group'>
                                    <input className=" form-control info-test" placeholder="cm"
                                       type={'number'}
                                       value={height}
                                       onChange={this.handleInput}
                                       name={'height'}
                                    ></input>
                                </div>
                                <li className='data-form'>
                                    ¿Cuánto pesas hoy?
                                        </li>
                                <div className='form-group'>
                                    <input className=" form-control info-test" placeholder="Kg"
                                       type={'number'}
                                       value={weight}
                                       onChange={this.handleInput}
                                       name={'weight'}
                                    ></input>
                                </div>
                                <li className='data-form'>
                                    ¿Cuál es tu nivel de actividad física?
                                       </li>
                                <div className='d-flex justify-content-between form-group'>
                                  <select class="form-control" name={'exercice'} value={exercice} onChange={this.handleSelect}>
                                    <option value='pocoActivo'>Poco activo</option>
                                    <option value='activo'>activo</option>
                                    <option value='muyActivo'>Muy activo</option>
                                  </select>
                                </div>    
                                <li className='data-form'>
                                    Estima tu porcentaje de grasa
                                </li>
                                  <div className='text-center'>
                                   <img className='img-grasa' src='https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn302/wp-content/uploads/2017/12/body-type_workout-1200x800.jpg'/>
                                  </div>        
                                <div className='d-flex justify-content-between form-group'>
                                  <select class="form-control" name={'fatPercantage'} value={fatPercantage} onChange={this.handleSelect}>
                                    <option value='delgadezAceptable'>Delgado</option>
                                    <option value='pesoNormal'>Normal</option>
                                    <option valie='sobrePeso'>Sobrepeso</option>
                                  </select>
                                </div> 

                                <li className='data-form'>
                                    ¿Cuál es tu objetivo?
                                        </li>
                                <div className='d-flex justify-content-between form-group'>
                                  <select class="form-control" name={'objective'} value={objective} onChange={this.handleSelect}>
                                    <option value='dietaPerderPeso'>Perder peso</option>
                                    <option value='dietaVolumen'>Ganar musculo</option>
                                    <option valie='dietaTonificacion'>Comer saludable</option>
                                  </select>
                                </div> 
                            </ol>
                            <button className='btn-send my-3 btn-block' type='submit'>ENVIAR</button>
                        </form>
    );
  }
   
}
