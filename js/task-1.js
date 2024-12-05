const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li');
  console.log(`Category: ${categoryTitle}, Elements: ${categoryItems.length}`);
});
