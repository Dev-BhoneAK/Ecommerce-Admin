import React from 'react';

const Login = () => {

    return (
        <div className="page-wrapper">
            <div className="authentication-box">
                <div className="container">
                    <div className="row" style={{justifyContent: 'center'}}>
                        <div className="col-md-6 text-center">
                            <div className="card tab2-card card-login">
                                <div className="card-body">
                                    <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist" style={{justifyContent: 'center'}}>
                                        <li className="nav-item">
                                            <a className="nav-link active" id="top-profile-tab" data-bs-toggle="tab"
                                               href="#top-profile" role="tab" aria-controls="top-profile"
                                               aria-selected="true"><span className="icon-user me-2"></span>Login Form</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="top-tabContent">
                                        <div className="tab-pane fade show active" id="top-profile" role="tabpanel"
                                             aria-labelledby="top-profile-tab">
                                            <form className="form-horizontal auth-form">
                                                <div className="form-group">
                                                    <input required=""
                                                           name="login[username]"
                                                           type="email"
                                                           className="form-control"
                                                           placeholder="Username"
                                                           id="exampleInputEmail1" />
                                                </div>
                                                <div className="form-group">
                                                    <input required=""
                                                           name="login[password]"
                                                           type="password"
                                                           className="form-control"
                                                           placeholder="Password" />
                                                </div>
                                                <div className="form-button">
                                                    <button className="btn btn-primary" type="submit">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;