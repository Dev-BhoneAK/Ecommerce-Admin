import CategoryMenu from "./CategoryMenu";
import NavBar from "./NavBar";

const BottomSection = () => {
  return (
    <div className="bottom-part">
      <div className="container">
        <div className="row">
          <CategoryMenu />
          <NavBar />
        </div>
      </div>
    </div>
  );
};
export default BottomSection;
