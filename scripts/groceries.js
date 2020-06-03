// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Tuna",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 5.87
	},
	{
		name: "Brussel Sprout",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.01
	},
	{
		name: "Mozzerela Cheese",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.99
	},
	{
		name: "Goat Cheese",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.99
	},
	{
		name: "Turkey Legs",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 3.30
	},
	{
		name: "Mayo",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 10.50
	},
	{
		name: "Gluten Free Bread",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.42
	},
	{
		name: "Trout Fillets",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 5.00
	},
	{
		name: "Gluten Free Doritos",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product = {
				name: prods[i].name, 
				price: prods[i].price
			}
			product_names.push(product);
		}
		else if ((restriction == "Gluten Free") && (prods[i].glutenFree == true)){
			product = {
				name: prods[i].name, 
				price: prods[i].price
			}
			product_names.push(product);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product = {
				name: prods[i].name, 
				price: prods[i].price
			}
			product_names.push(product);
		}		
		else if (restriction == "None"){
			product = {
				name: prods[i].name, 
				price: prods[i].price
			}
			product_names.push(product);
		}
	}
	product_names.sort(compare)
	return product_names;
}

//This code was inspired by the following website:
//https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
function compare(a, b) {
	const pricea = a.price;
	const priceb = b.price;
  
	let comparison = 0;
	if (pricea > priceb) {
	  comparison = 1;
	} else if (pricea < priceb) {
	  comparison = -1;
	}
	return comparison;
  }

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	chosenProduct = chosenProducts.map(x=>+x);
	chosenProduct = chosenProducts.reduce((a, b) => a + b, 0);
	return chosenProducts;
}