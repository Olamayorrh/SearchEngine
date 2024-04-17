import { Link } from "react-router-dom";

const Data = ({data})=>{
    return(
        <div>
            <Link to={data.displayLink}>{data.displayLink}</Link>
            <Link to={data.formattedUrl}><h4>{data.title}</h4></Link>
            <p>{data.snippet}</p>
        </div>
    )
}

export default Data;