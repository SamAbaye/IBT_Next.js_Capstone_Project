'use client'

const data = 'http://localhost:3000/menu.json'

export async function getDishes() { 
    const res = await fetch(data);
    return res.json();
}

