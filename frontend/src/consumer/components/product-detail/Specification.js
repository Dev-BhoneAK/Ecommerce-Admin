import React from 'react';

const Specification = () => {

    return (
        <section className="tab-product m-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                            <li className="nav-item"><a className="nav-link active" id="top-home-tab"
                                                        data-bs-toggle="tab"
                                                        href="#top-home" role="tab" aria-selected="true"><i
                                className="icofont icofont-ui-home"></i>Details</a>
                                <div className="material-border"></div>
                            </li>
                            <li className="nav-item"><a className="nav-link" id="profile-top-tab" data-bs-toggle="tab"
                                                        href="#top-profile" role="tab" aria-selected="false"><i
                                className="icofont icofont-man-in-glasses"></i>Specification</a>
                                <div className="material-border"></div>
                            </li>
                            <li className="nav-item"><a className="nav-link" id="contact-top-tab" data-bs-toggle="tab"
                                                        href="#top-contact" role="tab" aria-selected="false"><i
                                className="icofont icofont-contacts"></i>Video</a>
                                <div className="material-border"></div>
                            </li>
                            <li className="nav-item"><a className="nav-link" id="review-top-tab" data-bs-toggle="tab"
                                                        href="#top-review" role="tab" aria-selected="false"><i
                                className="icofont icofont-contacts"></i>Write Review</a>
                                <div className="material-border"></div>
                            </li>
                        </ul>
                        <div className="tab-content nav-material" id="top-tabContent">
                            <div className="tab-pane fade show active" id="top-home" role="tabpanel"
                                 aria-labelledby="top-home-tab">
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
                            <div className="tab-pane fade" id="top-profile" role="tabpanel"
                                 aria-labelledby="profile-top-tab">
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
                            <div className="tab-pane fade" id="top-contact" role="tabpanel"
                                 aria-labelledby="contact-top-tab">
                                <div className="">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8"
                                            allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="top-review" role="tabpanel"
                                 aria-labelledby="review-top-tab">
                                <form className="theme-form">
                                    <div className="form-row row">
                                        <div className="col-md-12">
                                            <div className="media">
                                                <label>Rating</label>
                                                <div className="media-body ms-3">
                                                    <div className="rating three-star"><i className="fa fa-star"></i> <i
                                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                        className="fa fa-star"></i> <i className="fa fa-star"></i></div>
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
                                            <button className="btn btn-solid" type="submit">Submit YOur
                                                Review
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