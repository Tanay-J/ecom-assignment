const ProductCard = ({ product }) => {
  const { brand, name, price, discount, img, sizes } = product;
  return (
    <div className="card-container">
      <img className="prod-img" src={img} />
      <p className="text-gray">{brand}</p>
      <p>{name}</p>
      <div>
        <strong>₹ {Math.round(price * ((100 - discount) / 100))}</strong>
        <s className="mx-xs">₹ {price}</s>
        <span className="text-success font-bold">{discount}%</span>
        <img
          className="assured-icon mx-xs"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
        />
      </div>

      <small>Free Delivery</small>
      <span className="text-gray">
        Sizes: {sizes.map((size) => size + " ")}
      </span>
    </div>
  );
};
export { ProductCard };
