import Link from "next/link";
import "./DishCard.css";
//import useCartStore from "../store/useCartStore";
import Image from "next/image";
import foodImage from '../../../public/habesha_food.jpg'

type DishCardProps = {
  id: string;
  nameEn: string;
  nameAm?: string;
  priceETB: number;
  spiceLevel?: string;
  isFasting?: boolean;
  isSpecial?: boolean;
  category?: string;
};

function getSpiceRating(spiceLevel?: string) {
  if (!spiceLevel) return 0;
  const match = spiceLevel.match(/(\d)\/3/);
  return match ? Number(match[1]) : 0;
}

const DishCard = ({
  id,
  nameEn,
  nameAm,
  priceETB,
  spiceLevel,
  isFasting,
  isSpecial,
  category,
}: DishCardProps) => {
  const secondaryBadge = isFasting ? { label: "Fasting", className: "badge-fasting" } : null;


  return (
    <div className="dish-item">
      <Link href={`/menu/${id}`} className="dish-item-link">
        <div className="image">
          <Image src={foodImage} alt={`${nameEn} (${nameAm})`} width={100} height={100} />
        </div>

        <div className="categoryWrapper">
          <span className="category-label">{category}</span>
          <div className="badges">
            {isSpecial && (
              <span className="badge badge-special">⭐ Special</span>
            )}
            {secondaryBadge && (
              <span className={`badge ${secondaryBadge.className}`}>
                {secondaryBadge.label}
              </span>
            )}
          </div>
        </div>

        <div className="dish-name">{nameAm}</div>
        <div className="dish-price">{priceETB} ETB</div>
      </Link>

      <div className="qty-row">
        {/* <button onClick={handleDecrement} disabled={quantity === 0}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button> */}
      </div>
    </div>
  );
};


export default DishCard;
