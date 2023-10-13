// Отримуємо список категорій
const categoriesList = document.getElementById("categories");

// Знаходимо всі елементи li.item
const categories = categoriesList.querySelectorAll("li.item");

// Виводимо кількість категорій
console.log(`У списку ${categories.length} категорії.`);

// Виводимо інформацію про кожну категорію
categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li");
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryItems.length}`);
});
