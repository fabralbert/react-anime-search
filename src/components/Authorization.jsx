import { useState } from "react"
import '../css/authorization.css'

export default (props) => {

  const [Form, setForm] = useState({
    authorization: '',
    pass: ''
  })

  const [Err, setErr] = useState('');

  function authorization(e) {
    e.preventDefault();

    console.log(Form);

    if (Form.authorization == 'admin' && Form.pass == '123456') {
      localStorage.setItem('authorization', 1);
      props.check(true);
    }
    else
      setErr('Incorrect login or password');
  }


  return (
    <>
      <div className="authorization-container">
        <div className="authorization-wrapper">
          <form onSubmit={(e) => authorization(e)}>
            <h1 className="authorization-title">Login to Site</h1>
            <div className="login-input">
              <label for="login-input">
                Login
              </label>
              <input type="text" placeholder="Type 'admin'" onInput={(e) => setForm({ ...Form, authorization: e.target.value })} />
            </div>
            <div className="password-input">
              <label for="password-input">
                Password
              </label>
              <input type="password" placeholder="Type '123456'" onInput={(e) => setForm({ ...Form, pass: e.target.value })} />
            </div>
            <button className="authorization-btn">Login</button>
            <p>{Err}</p>
          </form>
        </div>
      </div>
    </>
  )
}