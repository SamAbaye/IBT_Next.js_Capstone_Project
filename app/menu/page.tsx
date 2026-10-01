import DishList from "./DishList";

export default function MenuPage() {
    const dishes = ["pasta", "pizza", "salad"];
  return (
    <main>
      <h1>Our menu</h1>
      <DishList dishes={dishes} />
    </main>
  );
}
