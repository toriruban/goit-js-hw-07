const liItems = document.querySelectorAll(`#categories li.item`);
console.log(`Number of categories ${liItems.length}`);

liItems.forEach(items => {
   const categoryName = items.firstElementChild.textContent;
   console.log(`Category : ${categoryName}`);

   const elementsCount = items.lastElementChild.children.length;
   console.log(`Elements : ${elementsCount}`);
});