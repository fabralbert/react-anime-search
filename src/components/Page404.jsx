import { Link } from "react-router-dom"
import '../css/page404.css'

function Page404() {
  return (
    <>
      <div className='container'>
        <div className='page404-wrapper'>
          <h1 className="page404-title">404</h1>
          <div className="page404-text">Page not found</div>
          <Link to="/" className="page404-btn">Go home page</Link>
        </div>
      </div>
    </>
  )
}
export { Page404 };