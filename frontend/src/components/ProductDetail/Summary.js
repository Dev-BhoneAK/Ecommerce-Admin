import Gallery from "./Gallery";
import Specification from "./Specification";
import CallToActionPanel from "./CallToActionPanel";
const Summary = () => {
  return (
    <section>
      <div className="collection-wrapper">
        <div className="container">
          <div className="row">
            <Gallery />
            <Specification />
            <CallToActionPanel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Summary;
