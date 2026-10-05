import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import image from "../../../public/habesha_food.jpg";
//import DishCard from "../dish/DishCard";
import "./dishDetail.css";
export async function generateStaticParams() {
    const res = await fetch("http://localhost:3000/menu.json", {
        next: { revalidate: 3000 },
    });

    const data = await res.json();
    const dishes = data.categories.flatMap((cat) => cat.items);
    return dishes.map((dish) => ({ id: dish.id }));
}

function getSpiceRating(spiceLevel) {
  if (!spiceLevel) return 0;
  const match = spiceLevel.match(/(\d)\/3/);
  return match ? Number(match[1]) : 0;
}

export default async function SingleDishPage({ params }) {
    const { id } = await params;

    const res = await fetch("http://localhost:3000/menu.json", {
        next: { revalidate: 3000 },
    });
    const data = await res.json();

    const dishes = data.categories.flatMap((cat) =>
        cat.items.map((item) => ({
        ...item,
        category: cat.category,
        })),
    );

    const dish = dishes.find((selectedDish) => String(selectedDish.id) === id);
    const isSpicy = getSpiceRating(dish.spiceLevel) >= 2;

    if (!dish) notFound();

    return (
      <div className="dish-detail">
        <Link href="/menu" className="back-link">
          ← Back to menu
        </Link>

        <div className="dish-detail-layout">
          <div className="dish-detail-image">
            <Image src={image} alt={`${dish.nameEn} (${dish.nameAm})`} />
          </div>

          <div className="dish-detail-info">
            <span className="category-label">{dish.category}</span>

            <h1>{dish.nameEn}</h1>
            <h2 className="dish-name-am">{dish.nameAm}</h2>

            <div className="badges">
              {dish.isSpecial && (
                <span className="badge badge-special">⭐ Special</span>
              )}
              {dish.isFasting && (
                <span className="badge badge-fasting">Fasting</span>
              )}
              {!dish.isFasting && isSpicy && (
                <span className="badge badge-spicy">🌶️ Spicy</span>
              )}
            </div>

            <p className="dish-price">{dish.priceETB} ETB</p>

            {dish.tagline && <p className="dish-tagline">{dish.tagline}</p>}

            <p className="dish-description">{dish.description}</p>

            {dish.spiceLevel && (
              <p className="dish-meta">
                <strong>Spice level:</strong> {dish.spiceLevel}
              </p>
            )}

            {dish.servings && (
              <p className="dish-meta">
                <strong>Servings:</strong> {dish.servings}
              </p>
            )}

            {dish.ingredients?.length > 0 && (
              <div className="dish-ingredients">
                <strong>Ingredients</strong>
                <ul>
                  {dish.ingredients.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="dish-detail-qty">
              {/* <button onClick={handleDecrement} disabled={quantity === 0}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button> */}
            </div>
          </div>
        </div>
      </div>
    );
}
