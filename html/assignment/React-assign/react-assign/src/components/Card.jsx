import './card.css'
const Card = (props) => {
  return (
    <div id="adi">
      <img
        src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"
        alt=""
        height={200}
        width={150}
      />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
    </div>
  );
}
export default Card