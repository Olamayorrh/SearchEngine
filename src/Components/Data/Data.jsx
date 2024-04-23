import { Link } from "react-router-dom";

const Data = ({data})=>{
    return(
        <div>
            <Link className="item-heading" to={data.displayLink} target="_blank">{data.displayLink}</Link>
            <Link className="item-heading"  style={{marginBottom: "20px"}} to={data.formattedUrl} target="_blank"><h4>{data.title}</h4></Link>
            <p>{data.snippet}</p>
        </div>
    )
}

export default Data;