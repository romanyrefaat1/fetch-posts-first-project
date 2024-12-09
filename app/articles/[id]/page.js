import Todo from "@/app/components/todo"

export default function page(props) {
    console.log(props.params.id)
  return (
    <div>Articles by ID: {props.params.id}
    <Todo todoNum={props.params.id}/>    
    <p>text</p>
    </div>
  )
}
