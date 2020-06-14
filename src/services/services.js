const URL_BASE = 'http://localhost:8082/'
const userId = localStorage.getItem('authIdUser')
const testId = localStorage.getItem('authIdTestUser')

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

function GetTest(data){
  const URL = `${URL_BASE}physicalDetails/${testId}`;
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

export {LogIn, SignUp, PostTest, GetTest};