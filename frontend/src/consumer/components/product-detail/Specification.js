import React, {useState} from 'react';
import classNames from 'classnames';

const Specification = () => {

    const [activeTab, setAcitveTab] = useState("detail");

    // const className = classNames({
    //     'list-group-item': true,
    //     'strike-through': todo.completed,
    //     'alert alert-info': todo.priority === 1,
    //     'alert alert-warning': todo.priority === 2,
    //     'alert alert-danger': todo.priority === 3,
    // });
    return (
        <section className="tab-product m-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                            <li className="nav-item" onClick={() => setAcitveTab("detail")}>
                                <a className={`nav-link ${activeTab === "detail" && "active"}`}
                                   href="#!">
                                   Details
                                </a>
                                <div className="material-border"></div>
                            </li>
                            <li className="nav-item" onClick={() => setAcitveTab("specification")}>
                                <a className={`nav-link ${activeTab === "specification" && "active"}`}
                                   href="#!">
                                    Specification
                                </a>
                                <div className="material-border"></div>
                            </li>
                            <li className="nav-item" onClick={() => setAcitveTab("video")}>
                                <a className={`nav-link ${activeTab === "video" && "active"}`}
                                   href="#!">
                                    Video
                                </a>
                                <div className="material-border"></div>
                            </li>
                            <li className="nav-item" onClick={() => setAcitveTab("review")}>
                                <a className={`nav-link ${activeTab === "review" && "active"}`}
                                   href="#!">
                                    Write Review
                                </a>
                                <div className="material-border"></div>
                            </li>
                        </ul>
                        <div className="tab-content nav-material" id="top-tabContent">
                            <div className={`tab-pane fade ${activeTab === "detail" && "show active"}`}>
                                <div className="product-tab-discription">
                                    <div className="part">
                                        <p>The Model is wearing a white blouse from our stylist's collection, see the
                                            image
                                            for a mock-up of what the actual blouse would look like.it has text written
                                            on
                                            it in a black cursive language which looks great on a white color.</p>
                                    </div>
                                    <div className="part">
                                        <h5 className="inner-title">fabric:</h5>
                                        <p>Art silk is manufactured by synthetic fibres like rayon. It's light in weight
                                            and
                                            is soft on the skin for comfort in summers.Art silk is manufactured by
                                            synthetic
                                            fibres like rayon. It's light in weight and is soft on the skin for comfort
                                            in
                                            summers.</p>
                                    </div>
                                    <div className="part">
                                        <h5 className="inner-title">size & fit:</h5>
                                        <p>The model (height 5'8") is wearing a size S</p>
                                    </div>
                                    <div className="part">
                                        <h5 className="inner-title">Material & Care:</h5>
                                        <p>Top fabric: pure cotton</p>
                                        <p>Bottom fabric: pure cotton</p>
                                        <p>Hand-wash</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'specification' && 'show active'}`}>
                                <p>The Model is wearing a white blouse from our stylist's collection, see the image for
                                    a
                                    mock-up of what the actual blouse would look like.it has text written on it in a
                                    black
                                    cursive language which looks great on a white color.</p>
                                <div className="single-product-tables">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Sleeve Length</td>
                                            <td>Sleevless</td>
                                        </tr>
                                        <tr>
                                            <td>Neck</td>
                                            <td>Round Neck</td>
                                        </tr>
                                        <tr>
                                            <td>Occasion</td>
                                            <td>Sports</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Fabric</td>
                                            <td>Polyester</td>
                                        </tr>
                                        <tr>
                                            <td>Fit</td>
                                            <td>Regular Fit</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'video' && 'show active'}`}>
                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8"
                                            allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'review' && 'show active'}`}>
                                <form className="theme-form">
                                    <div className="form-row row">
                                        <div className="col-md-12">
                                            <div className="media">
                                                <label>Rating</label>
                                                <div className="media-body ms-3">
                                                    <div className="rating three-star">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name"
                                                   placeholder="Enter Your name"
                                                   required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email"
                                                   required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <input type="text" className="form-control" id="review"
                                                   placeholder="Enter your Review Subjects" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <textarea className="form-control" placeholder="Wrire Your Testimonial Here"
                                                      id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">
                                                Submit Your Review
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Specification;