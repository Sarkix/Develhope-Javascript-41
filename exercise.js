const titleInput = document.getElementById("todo-title");
const completedCheckbox = document.getElementById("todo-completed");
const submitButton = document.getElementById("submit-todo");

// const requestOptions = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newPost),
// };

async function createNewPost(newPost) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error("No se pudo crear el nuevo post");
    }

    const postData = await response.json();
    console.log("Nuevo post creado:", postData);
  } catch (error) {
    console.error("Error al crear el nuevo post:", error);
  }
}

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const completed = completedCheckbox.checked;
  const newPost = {
    title: title,
    completed: completed,
  };
  createNewPost(newPost); //Para llamar a la función cuando se pulse el botón de enviar.
});
