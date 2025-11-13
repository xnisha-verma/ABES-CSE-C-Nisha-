import './fashion.css'
const Fashion = (props) => {
  return (
    <div>
        <h3>Title: {props.title}</h3>
        <h3>Price: {props.price}</h3>
        <img src={props.img} alt="" width={100} height={100}/>
    </div>
  )
}
export default Fashion