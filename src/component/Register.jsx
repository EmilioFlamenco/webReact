import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useHistory } from "react-router-dom";
import { Alert } from "./Alert";

export const Register = () => {

  const [user, serUser] = useState({
    email: '',
    password: ''
  })

  const { signup } = useAuth()
  const history = useHistory();
  const [error, setError] = useState()

  const handleChange = ({ target: { name, value } }) => {
    serUser({ ...user, [name]: value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      history.push('/')
    } catch (error) {
      setError(error.message)
      //se puede hacer un if
      //    setError (error.massage)

    }
  }
  return (

    <section className= "text-center text-lg-start register-css ">

      {error && <Alert message={error} />}

      <div className="container py-4">
        <div className="row g-0 align-items-center ">
          <div className="col-lg-6 mb-5 mb-lg-0 ">
            <div className="cascading-right card  " >
              <div className="card-body p-5 shadow-5 text-center card-css " >
                <h2 className="fw-bold mb-5">Sign up now</h2>

                <div className="form-outline mb-4">
                  <form onSubmit={handleSubmit}>
                    <label
                      className="form-label"
                      for="form3Example3"
                      htmlFor="email" >Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="form3Example3"
                      placeholder="youremail@company.com"
                      onChange={handleChange} />
              


                <div className="form-outline mb-4">
                  <label
                    className="form-label"
                    for="form3Example4"
                    htmlFor="password">Pasword</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password" id="password"
                    id="form3Example4"
                    onChange={handleChange}
                    placeholder="***********" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0 ">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
            alt="" />
        </div>

      </div>
      </div>
      </div>
    </section >






  )
}
