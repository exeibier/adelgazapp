const URL_BASE = 'http://localhost:8082/'
const userId = localStorage.getItem('authIdUser')

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

export {LogIn, SignUp, PostTest};