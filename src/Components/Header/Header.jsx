import SearchHeader from "./SearchHeader";
import SubHeader from "./SubHeader";

const Header = ({search, searchsetter})=>{
    return(
        <>
        <SearchHeader search={search} searchsetter={searchsetter}/>
            <SubHeader />
        </>
    )
}

export default Header;