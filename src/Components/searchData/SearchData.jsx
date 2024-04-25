import "./searchData.css"
import Data from "../Data/Data";


const SearchData = ({googledData, HandlePageChange,currentPage})=>{
console.log(currentPage);
  
// const HandlePageChange =()=>{
//     setCurrentPage(currentPage=>currentPage + 1)
// }
    return(
        <div className="result-page">
            <p>
            All {googledData.searchInformation.formattedTotalResults }
            results found in {googledData?.searchInformation.formattedSearchTime } sec
            </p>

            <div className="search-data-result">
                {
                    googledData.items.map((data,index)=>(
                    <div className="search-data" key={index}> <Data data={data} index={index}/></div>
                    ))

                   
                }

            </div>
                {/* here is the button triggering the pagechange */}

                 {
                    <button  onClick={()=>HandlePageChange()} >Next Page</button>
                 }

        </div>
    )
}

export default SearchData;