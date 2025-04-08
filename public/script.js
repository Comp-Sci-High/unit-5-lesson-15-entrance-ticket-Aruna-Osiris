// Create a function that tests the post route handler [2 pts]

const base = 'https://reimagined-acorn-6949w45x9qqw2575w-3000.app.github.dev'

async function newPotion(label, effect, ingredients, color, isExplosive) {
    try {
        // fill in the path
        const response = await fetch(base + "/add" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                label: label,
                effect: effect,
                ingredients: ingredients,
                color: color,
                isExplosive: isExplosive
            })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}



// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]
newPotion("Knowledge Perfection 1", "gain knowledge beyond the universe", "nerves, blood of the user, mint, a piece of heaven", "blue", false)