// Масив інгредієнтів
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

// Отримуємо список інгредієнтів
const ingredientsList = document.getElementById("ingredients");

// Створюємо та додаємо кожен інгредієнт до списку
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ingredientsList.appendChild(li);
});
