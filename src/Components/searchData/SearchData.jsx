import Data from "../Data/Data";

const SearchData = ({googledData})=>{
    return(
        <div>
            <p>
            All {googledData.searchInformation.formattedTotalResults }
            results found in {googledData?.searchInformation.formattedSearchTime } sec
            </p>

            {
                googledData.items.map((data,index)=>(
                   <div key={index}> <Data data={data} index={index}/></div>
                ))
            }
        </div>
    )
}

export default SearchData;