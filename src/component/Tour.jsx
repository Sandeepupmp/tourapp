import { useState } from "react"

function Tour({id,name, image, info, price, removeTour}) {
    const [readMore,setReadMore] = useState(false)
    
  return (
  <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
        <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">Rs.{price}</h4>
        </div>
        <p>{ readMore ? info :`${info.substring(0,200)} ...`
            
            } 
            <button onClick={()=>setReadMore(!readMore)}>
                {readMore? "sow less" :"read more"}
            </button>
            </p>
        <button className="delete-btn" onClick={()=>removeTour(id)}>
            Pasand nhi aaya.
        </button>
    </footer>

  </article>
  )
}
export default Tour