import MainLogo from "./MainLogo";
import SearchBar from "./SearchBar";
import UserActionMenu from "./UserActionMenu";

const MainSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="main-menu">
            <MainLogo />
            <SearchBar />
            <UserActionMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSection;
