import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/todos/1'

// Interfaces in typescript are used to define the structure of the object
interface Todo {
	id: number
	title: string
	completed: boolean
}

axios.get(url).then((response) => {
	// Telling the typescript that the response data is like Todo
	const Todo = response.data as Todo

	const ID = Todo.id
	const title = Todo.title
	const finished = Todo.completed

	logUrl(ID, title, finished)
})

const logUrl = (id: number, title: string, finished: boolean) => {
	console.log(`
    The Todo with ID : ${id}
    Has the Title of : ${title}
    Is it has Finished : ${finished}
  `)
}
