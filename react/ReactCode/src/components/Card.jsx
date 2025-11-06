// const Card = () => {
//   return (
//     <div>
//       <div class="container mt-3">
//         <h2>Card titles, text, and links</h2>
//         <p>
//           Use .card-title to add card titles to any heading element. The
//           .card-text class is used to remove bottom margins for a p element if
//           it is the last child (or the only one) in card-body. The .card-link
//           class adds a blue color to any link, and a hover effect.
//         </p>
//         <div class="card">
//           <div class="card-body">
//             <h4 class="card-title">Card title</h4>
//             <p class="card-text">Some example text. Some example text.</p>
//             <a href="#" class="card-link">
//               Card link
//             </a>
//             <a href="#" class="card-link">
//               Another link
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Card
import './card.css'
const Card = (props) => {
  return (
    <div id="adi">
      <img
        src="https://m.media-amazon.com/images/I/41eSHkSFC5L._AC_UF1000,1000_QL80_.jpg"
        alt=""
        height={200}
        width={200}
      />
      <h3>{props.name}</h3>
      <h3>{props.edu}</h3>
    </div>
  );
}
export default Card