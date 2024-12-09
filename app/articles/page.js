import Todo from "../components/todo";

export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todos = await response.json();
  console.log(`todos`, todos);

  return (
    <div>
      Articles
      <h2>{todos.title}</h2>
      <Todo todoNum={1}/>
      <p>Text</p>
    </div>
  );
}
