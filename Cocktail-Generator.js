class CocktailSearch {
    static async searchCocktail(name) {
        try {
            const apiKey = 'key'; 
            const response = await fetch(`https://api.api-ninjas.com/v1/cocktail?name=${name}`, {
                headers: {
                    'X-Api-Key': apiKey,
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error searching cocktail:', error);
            return null;
        }
    }
}

document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const cocktailName = document.getElementById('cocktailName').value.trim();
    
    if (cocktailName) {
        const result = await CocktailSearch.searchCocktail(cocktailName);

        if (result && result.length > 0) {
            const recipe = result[0];
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h2>${recipe.name}</h2>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            `;
        } else {
            document.getElementById('result').textContent = 'Cocktail not found. Try another search.';
        }
    }
});

