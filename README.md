# React Todo App

It is a React Todo app with simple interface that allows adding, deleting, editing features using `useState()`, `useEffect()`, `useRef()` hooks and props.

## Features

- It is a simple todo application.
- Adding, deleting, editing operations can be done.
- Input value cannot be left blank.
- A custom alert was created. After each operation, a message and different colors related to the relevant operation were defined.
- A different edit task component was added for editing.
- The waiting time for messages on the screen is set to 5 seconds. If desired, it can be changed from setTimeout in the `showAlert()` function.
- Inputs accept operations with the `Enter` key in addition to the click() event.

## Used in the project

- The interface design was made by me.
- Google Quicksand font used.
- Font Awesome icon library was used.
- json-server
- axios

## Screenshot
![Todo App screenshot](https://github.com/huseyineskan/react-todo-app/blob/main/src/assets/todo-app.gif)

## db.json Example

````{
  "tasks": [
    {
      "id": "b64d",
      "task": "I will show you my calender"
    },
    {
      "id": "e5df",
      "task": "We are learning React"
    }
  ]
}```
````
