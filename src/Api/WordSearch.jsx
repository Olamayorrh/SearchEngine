const KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const ID = import.meta.env.VITE_REACT_APP_ENGINE_ID;

export const SearchData = async (text)=>{
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${ID}&q=${text}`);
    const result=data.json();
    return result;
}