const form = document.getElementById("reportForm");
const itemList = document.getElementById("itemList");

// Load saved items from localStorage
window.onload = function() {
  const saved = JSON.parse(localStorage.getItem("items")) || [];
  saved.forEach(item => addItemToList(item));
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const type = document.getElementById("type").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const contact = document.getElementById("contact").value;

  const item = { type, title, description, contact };
  addItemToList(item);

  // Save to localStorage
  const saved = JSON.parse(localStorage.getItem("items")) || [];
  saved.push(item);
  localStorage.setItem("items", JSON.stringify(saved));

  form.reset();
});

function addItemToList(item) {
  const div = document.createElement("div");
  div.className = "item";
  if (item.type === "Lost") {
    div.classList.add("lost");
  }
  div.innerHTML = `<strong>${item.type}: ${item.title}</strong>
    <p>${item.description}</p>
    <small>Contact: ${item.contact}</small>`;
  itemList.appendChild(div);
}