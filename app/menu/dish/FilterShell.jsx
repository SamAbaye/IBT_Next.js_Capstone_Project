'use client'
import { useState, useMemo } from "react"
import DishCard from '../dish/DishCard';
import CategoryBar from "../catagory/CategoryBar";

function FilterShell ({ dishes }) {
    const [filter, setFilter] = useState("all");

    const categories = useMemo(() => {
        if (filter === "All") return dishes;
        return dishes.filter((d) => d.category === filter);
    }, [filter, dishes]);    

    return (
        <div>
            <CategoryBar
            categories={categories}
            selected={filter}
            onSelect={setFilter}
            />
            <div className="dishes">
            {categories.map((d) => (
                <DishCard key={d.id} {...d} category={d.category} />
            ))}
            </div>
        </div>
    );
}

export default FilterShell
