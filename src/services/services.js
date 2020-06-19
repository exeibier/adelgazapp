const URL_BASE = 'http://fitu-api.mybluemix.net/'
const userId = localStorage.getItem('authIdUser')
const testId = localStorage.getItem('authIdTestUser')
const addressId = localStorage.getItem('isUserDirection')

function LogIn(data) {
    const URL = `${URL_BASE}auth/login`;
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
    })
  }

  function SignUp(data){
      const URL = `${URL_BASE}users/signup`;
      return fetch(URL,{
          method:"POST",
          body: JSON.stringify(data),
          headers: {
              "Content-type": "application/json",
          },
          mode: "cors"
      })
  }

  function PostTest(data){
    const URL = `${URL_BASE}physicalDetails/${userId}`;
    console.log(data)
    return fetch(URL,{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        },
        mode: "cors"
    })
}
function GetPhysiognomy(data){
  const URL = `${URL_BASE}physicalDetails/eatingPlan/${userId}`;
  console.log(data)
  return fetch(URL,{
      method:"GET",
      body: JSON.stringify(data),
      headers: {
          "Content-type": "application/json",
      },
      mode: "cors"
  })
}

function GetTest(data){
  const URL = `${URL_BASE}physicalDetails/test/${testId}`;
  console.log(data)
  return fetch(URL,{
      method:"GET",
      body: JSON.stringify(data),
      headers: {
          "Content-type": "application/json",
      },
      mode: "cors"
  })
}
function GetEatingPlan(idEatingPlan){
  const URL = `${URL_BASE}eatingPlan/${idEatingPlan}`;
  return fetch(URL,{
      method:"GET",
      headers: {
          "Content-type": "application/json",
      },
      mode: "cors"
  })
}
function GetShoppingCart(idEatingPlan){
  const URL = `${URL_BASE}shoppingCart/getTotalPriceBuy/${idEatingPlan}`;
  return fetch(URL,{
      method:"GET",
      headers: {
          "Content-type": "application/json",
      },
      mode: "cors"
  })
}
function PostAddress(data){
  const URL = `${URL_BASE}direction/${userId}`;
  return fetch(URL,{
      method:"POST",
      body: JSON.stringify(data),
      headers: {
          "Content-type": "application/json",
      },
      mode: "cors"
  })
}
function GetAddress(){
  const URL = `${URL_BASE}direction/userDirection/${userId}`;
  return fetch(URL,{
      method:"GET",
      headers: {
          "Content-type": "application/json",
      },
      mode: "cors"
  })
}
function GetAllPlans(data){
  const URL = `${URL_BASE}eatingPlan/allPlans/${userId}`;
  return fetch(URL,{
      method:"GET",
      body: JSON.stringify(data),
      headers: {
          "Content-type": "application/json",
      },
      mode: "cors"
  })
}

export {LogIn, SignUp, PostTest, GetPhysiognomy, GetTest, GetEatingPlan, GetShoppingCart, PostAddress, GetAddress, GetAllPlans};