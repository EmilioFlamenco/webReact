import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useHistory } from "react-router-dom";
import { Alert } from "./Alert";

export const Login = () => {
  const [user, serUser] = useState({
    email: '',
    password: ''
  })
  const { login } = useAuth()
  const history = useHistory();
  const [error, setError] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    serUser({ ...user, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      history.push('/')
    } catch (error) {
      setError(error.message)
    }

  }

  // const handleGoogleSignin = ()=>{}

  return (
    <section className="vh-100 p-5 bg-light border login-css">

    <div clclassNameass="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">

        <div className="col-md-8 col-lg-7 col-xl-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </div>

        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          {error && <Alert message={error} />}
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label" for="form1Example13" htmlFor="email" >Email</label>
              <input type="email" id="form1Example13" className="form-control form-control-lg" name="email" placeholder="youremail@company.com"
                onChange={handleChange} />
            </div>
            <div className="form-outline mb-4" >
              <label className="form-label" for="form1Example23" htmlFor="password">Pasword</label>
              <input type="password" name="password" id="form1Example23 " className="form-control form-control-lg"
                onChange={handleChange}
                placeholder="***********" />
            </div>

            <div class="d-flex justify-content-around align-items-center mb-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label class="form-check-label" for="form1Example3"> Remember me </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>

            <div className="justify-content-around d-flex">
              <button type="submit" class="btn btn-primary btn-lg  btn-block " style={{ width: '80%' }}>login</button>
            </div>

          </form>
        </div>
      </div>
    </div>
</section>
  )
}


