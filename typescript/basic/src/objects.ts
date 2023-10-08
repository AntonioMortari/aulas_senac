// type

type Tasks = {
    name: string
    done: boolean
    description: string
}

type User = {
    firstName: string
    age: number
    email: string
    tasks: Tasks[] //array of objects: Tasks
}

const user: User ={
    firstName:'John',  //string
    age :25,           //number
    email :'john@gmail.com',   //string
    tasks: [
        {
            name: 'Tarefa1',
            done: true,
            description: "descrição da tarefa"
        }
    ]
}

// console.log(user)

// UNIONS
type Author = {
    books: string[]
}

const author1 : Author & User = {
    firstName:'Nome',
    age:30,
    email:'email@mail.com',
    books:[
        'title book one',
        'title book two',
    ],
    tasks:[
        
    ]
    
}
