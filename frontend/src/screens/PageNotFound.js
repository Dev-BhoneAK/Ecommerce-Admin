import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section class="p-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="error-section">
              <h1>404</h1>
              <h2>page not found</h2>
              <Link to="/" class="btn btn-solid">
                back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
