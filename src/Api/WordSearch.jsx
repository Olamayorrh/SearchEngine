import { useState } from "react";


const key="AIzaSyDe9DQOuJqmo2ogY3QCKoFGozV8HuUO2rw"
const ID="f57abf813584a44d8"
export const SearchData = async (text)=>{

    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemsperpage] =useState(10);
    // const [isLoading, setIsLoading] = useState(false);
    // const [hasMoreResults, setHasMoreResults] = useState(false);
    // const [googledData, setGoogledData] = useState([])
    



    // const startIndex = (currentPage -1) * itemsPerPage
    let url = (`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${ID}&q=${text}`)
    try{
        const data = await fetch(url);
        console.log(data);
        //setIsLoading(true);
        const result=data.json();
        return result;
        // setGoogledData(result)
        // setHasMoreResults(result.queries.nextPage[0]);
        // setIsLoading(false);

    }catch(error){
        console.log(error);
    }

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