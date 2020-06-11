const URL_BASE = 'http://localhost:8082/'

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

  function getUserData(data){
    const URL = `${URL_BASE}users`;
    return fetch(URL, {
      methor:'GET',
      body: JSON.stringify(data),
          headers: {
              "Content-type": "application/json",
          },
          mode: "cors"
    })
  }

export {LogIn, SignUp, getUserData};