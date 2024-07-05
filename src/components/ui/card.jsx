import PropTypes from "prop-types";
import img1 from "../../assets/1.jpg";

const Card = ({ className, name, rating, price, popular, votes, available }) => {
  return (
    <div className={`mt-4 ${className} px-4`}>
      <div className="w-full h-[60%] overflow-hidden rounded-lg relative">
        <img
          src={img1}
          alt="coffee"
          className=""
        />
        {popular && <p className="absolute top-3 left-3 px-4 py-1 text-sm bg-[#f4c967] rounded-full font-semibold text-zinc-800 ">Popular</p>}
      </div>
      <div className="flex items-center text-white font-semibold justify-between mt-3">
        <p className="text-lg">{name}</p>
        <p className="text-sm px-2 py-1 bg-green-200 rounded-md text-zinc-900">${price}</p>
      </div>
      <div className="mt-2 flex items-center gap-1">
        <img
          src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png"
          alt=""
          className="w-5 h-5"
        />
        <p className="font-semibold text-white">
          {rating} <span className="font-normal text-zinc-500">{`(${votes} votes)`}</span>
        </p>
        {!available && <p className="text-red-600 font-semibold ms-auto">Sold out</p>}
      </div>
    </div>
  );
};

// Define prop types for the component
Card.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  popular: PropTypes.bool.isRequired,
  votes: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
};

// Define default props for the component
Card.defaultProps = {
  className: "",
  name: "Coffee",
  rating: 5,
  price: 5,
  votes: 100,
  available: true,
};

export default Card;
