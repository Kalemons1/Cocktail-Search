describe('CocktailSearch', () => {
    it('should search for a cocktail', async () => {
      spyOn(window, 'fetch').and.returnValue(Promise.resolve({
        json: () => Promise.resolve([
          {
            name: 'Mocktail',
            ingredients: ['Mock Ingredient 1', 'Mock Ingredient 2'],
            instructions: 'Mix ingredients and enjoy!',
          },
        ]),
      }));
  
      const result = await CocktailSearch.searchCocktail('Mocktail');
  
      expect(result).toEqual([
        {
          name: 'Mocktail',
          ingredients: ['Mock Ingredient 1', 'Mock Ingredient 2'],
          instructions: 'Mix ingredients and enjoy!',
        },
      ]);
    });
  });
  