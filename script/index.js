function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
//   for (const category of categories) {
//     console.log(category);
//   }

const categoryContainer = document.getElementById('category-container')

for(let cat of categories){
 const categoryDiv =   document.createElement('div');
 categoryDiv.innerHTML = `
    <button class="btn btn-sm btn-accent font-bold">${cat.category}</button>
 
 `;
 categoryContainer.append(categoryDiv)
}
}

loadCategories();
