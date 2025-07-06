/* 
Implement the PizzaMaker class, which allows you to create pizza of different types, with different ingredients, calculate the price and calorie content of pizza.

The pizza comes in 3 sizes: S, M and L.

There are 4 types of pizza available: meat, fish, cheese and vegetarian.

When creating a new pizza, be sure to specify the size and appearance.

Additional ingredients are available that can be added to the pizza at the customer's request: tomatoes, peppers, bacon and olives.

Each element that makes up pizza has its own name, price and calorie content. All of this data is contained in the pizzaMenu object.

The PizzaMaker class has a number of methods for generating pizza:

- addIngredient(ingredient) method adds an additional ingredient to the pizza. A new ingredient is added if it is not included in the pizza, and the message 
"ingredient_name has been added" is displayed in the console. If such an ingredient has already been added, the message "Such an ingredient already exists!" is generated.

- deleteIngredient(ingredient) method removes the specified ingredient from the list of existing ingredients, displays the message "ingredient_name has been deleted"
to the console.

- getIngredients() method returns a list of the attached ingredients with their name, price, calorie content.

- getSize() method returns the size of the pizza.

- getKind() method returns the type of pizza.

- calculatePrice() method calculates and returns the total cost of a pizza, which consists of the sum of the values of all its components.

- calculateCalories() method calculates and returns the total calorie content of a pizza, which consists of the sum of the calories of all its components.

For example:

test	Result
const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("Size:", pizza.getSize());
// Size: SIZE_M

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("Kind:", pizza.getKind());
// Kind: KIND_MEAT

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("calculatePrice:", pizza.calculatePrice());
// calculatePrice: 145

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("calculateCalories:", pizza.calculateCalories());
// calculateCalories: 680

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("getIngredients:", pizza.getIngredients());
// getIngredients: []

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
// INGREDIENT_BACON has been added
// Such an ingredient already exists!

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);
// INGREDIENT_TOMATOES has been added
// INGREDIENT_BACON has been added
// INGREDIENT_TOMATOES has been deleted
*/


const pizzaMenu = {
  SIZE_S: { param: 'SIZE_S', price: 60, calorie: 300 },
  SIZE_M: { param: 'SIZE_M', price: 90, calorie: 450 },
  SIZE_L: { param: 'SIZE_L', price: 110, calorie: 600 },
  KIND_MEAT: { param: 'KIND_MEAT', price: 55, calorie: 230 },
  KIND_FISH: { param: 'KIND_FISH', price: 70, calorie: 150 },
  KIND_CHEESE: { param: 'KIND_CHEESE', price: 50, calorie: 200 },
  KIND_VEGETARIAN: { param: 'KIND_VEGETARIAN', price: 35, calorie: 50 },
  INGREDIENT_TOMATOES: { param: 'INGREDIENT_TOMATOES', price: 15, calorie: 5 },
  INGREDIENT_PEPPER: { param: 'INGREDIENT_PEPPER', price: 18, calorie: 5 },
  INGREDIENT_BACON: { param: 'INGREDIENT_BACON', price: 25, calorie: 40 },
  INGREDIENT_OLIVES: { param: 'INGREDIENT_OLIVES', price: 20, calorie: 0 },
};

class PizzaMaker { 
    constructor(size, kind) {
        this.size = size;
        this.kind = kind;
        this.ingredients = [];
    }

    addIngredient(ingredient){
        if (this.ingredients.includes(ingredient)) {
            console.log(`Such an ingredient already exists!`);
        } else {
            this.ingredients.push(ingredient);
            console.log(`${ingredient.param} has been added`);
        }
    }

    deleteIngredient(ingredient) {
        const index = this.ingredients.indexOf(ingredient);
        if (index !== -1) {
            this.ingredients.splice(index, 1);
            console.log(`${ingredient.param} has been deleted`);
        } else {
            console.log(`Ingredient not found`);
        }
    }
    
    getIngredients() {
        return this.ingredients.map(ingredient => ({
            param: ingredient.param,
            price: ingredient.price,
            calorie: ingredient.calorie
        }));
    }
    
    getSize() {
        return this.size.param;
    }

    getKind() {
        return this.kind.param;
    }

    calculatePrice() {
        let totalPrice = this.size.price + this.kind.price;
        for (const ingredient of this.ingredients) {
            totalPrice += ingredient.price;
        }
        return totalPrice;
    }    

    calculateCalories() {
        let totalCalories = this.size.calorie + this.kind.calorie;
        for (const ingredient of this.ingredients) {
            totalCalories += ingredient.calorie;
        }
        return totalCalories;
    }
}
