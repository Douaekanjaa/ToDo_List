import React from 'react'

export default function Nav() {
  return (
    <div className="container-fluid position-fixed end-0 border-bottom border-1 border-dark "  style={{width:"80%", height:"15%"}}>
        <div className="row  justify-content-between align-items-center ">
            <div className="col-2 ">
                <a href="">Logo</a>
            </div>
            <div className="col-3 px-4 py-1 text-right">
                <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#" className="btn btn-light my-2 mx-2">Login</a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="btn btn-primary my-2 mx-2">SignUp</a>
                </li>
                </ul>
            </div>
    </div>
  </div>
  )
}
