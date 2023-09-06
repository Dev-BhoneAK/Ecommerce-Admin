import React, {useState, useRef, useEffect} from 'react';

const Search = () => {

    const [search, setSearch] = useState(false);

    useEffect(() => {
        const handler = (event) => {
            event.type === 'focus' ? setSearch(true) : setSearch(false);
        };

        const navSearch = document.querySelector('.nav-search');
        navSearch.addEventListener("blur", handler);
        navSearch.addEventListener("focus", handler);
        return () => {
            navSearch.removeEventListener("blur", handler);
            navSearch.removeEventListener("focus", handler);
        };
    }, [search]);
    return (
        <div>
            <form className="form_search ajax-search the-basics">
                <input type="search" placeholder="Search any Device or Gadgets..."
                       className="nav-search nav-search-field typeahead" onChange={() => setSearch(true)}/>
                <button type="submit" name="nav-submit-button" className="btn-search">
                    <i className="ti-search"></i>
                </button>
                <div className="tt-menu" style={{position: "absolute", top: "100%", left: "0px", zIndex: "100", display: search ? "block" : "none"}}>
                    <div className="tt-dataset tt-dataset-states">
                        <a href="product-page.html" className="man-section tt-suggestion tt-selectable">
                        <div className="image-section"><img src="../assets/images/products/5.jpg" /></div>
                        <div className="description-section"><h4><strong className="tt-highlight">Ap</strong>ple Phones
                        </h4><span>$250</span></div>
                    </a><a href="product-page.html" className="man-section tt-suggestion tt-selectable">
                        <div className="image-section"><img src="../assets/images/products/7.jpg" /></div>
                        <div className="description-section">
                            <h4>C<strong className="tt-highlight">a</strong>r <strong
                            className="tt-highlight">A</strong>ccessories</h4><span>$250</span></div>
                    </a></div>
                </div>
            </form>
        </div>
    )
}
export default Search;