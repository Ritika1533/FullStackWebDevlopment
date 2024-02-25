import "./Die.css"
export  default function Die({val,color="greyblue"}){
    return(
        <div className="Die" style={{backgroundColor:color}}>{val}</div>
    )
} 