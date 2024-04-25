import { useState, useContext } from "react";

// import { userContext } from "../Pages/Globalcontext";


const key="AIzaSyDGbMXmF2Jv90xNPZbRtXUJG5mdHDQXn84"
const ID="25c904ce01d9543ee"
export const SearchData = async (word=word,startIndex=startIndex)=>{

    
    



   // const startIndex = (currentPage -1) * itemsPerPage

    // console.log(startIndex);
    let url = (`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${ID}&q=${word}&start=${startIndex}`)
    
        const data = await fetch(url);
        console.log(data);
        //setIsLoading(true);
        const result=data.json();
        // console.log(result);
        // console.log(result.queries.nextpage[0]);
        return result;
        // setGoogledData(result)
        // setHasMoreResults(result.queries.nextPage[0]);
        // setIsLoading(false);

   

    // const HandlePagechange = (pageNumber)=>{
    //     setCurrentPage(pageNumber)
    // }

    // return(
    //     <div className="result-page">
    //     <p>
    //     All {googledData.searchInformation.formattedTotalResults }
    //     results found in {googledData?.searchInformation.formattedSearchTime } sec
    //     </p>

    //     <div className="search-data-result">
            
    //              <p>
    //              All {googledData.searchInformation.formattedTotalResults }
    //              results found in {googledData?.searchInformation.formattedSearchTime } sec
    //              </p>

    //              {isLoading && (<h3 style={{textAlign:"center", color:"black"}}>Loading....</h3>)}
         
    //              {
    //                  googledData.items.map((data,index)=>(
    //                     <div key={index}>
    //                          <Link to={data.displayLink}>{data.displayLink}</Link>
    //                          <Link to={data.formattedUrl}><h4>{data.title}</h4></Link>
    //                          <p>{data.snippet}</p>
    //                     </div>
    //                  ))
    //              }

    //              {
    //                 hasMoreResults && (<button onClick={()=>HandlePagechange(currentPage + 1)}>Next Page</button>)
    //              }

               
            
    //     </div>

    //     </div>
    // )
    
}