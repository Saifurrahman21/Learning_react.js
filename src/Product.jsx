import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["14,495", "11,900", "1599", "599"];

  let newPrices = ["8,999", "9,199", "899", "278"];

  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intutive surface", "design for iPad pro"],
    ["designed for ipadPro", "intutive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
