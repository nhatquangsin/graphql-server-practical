// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
      name: 'J.K. Rowling',
    },
  },
  {
    title: 'Jurassic Park',
    author: {
      name: 'Michael Crichton',
    },
  },
];

const authors = [
  {
    name: 'J.K. Rowling',
  },
  {
    name: 'Michael Crichton',
  }
]

let todos = [
  {
    id: '1',
    title: 'Buy eggs',
    done: false,
  },
  {
    id: '2',
    title: 'Eat lunch',
    done: false,
  }
];

let n = 2;
const idGenerator = () => {
  return ++n + "";
}

const findTodoById = (id) => {
  return todos.find(todo => todo.id === id);
}

const toggleTodo = (_, { id }) => {
  const todo = findTodoById(id);
  todos = todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        done: !todo.done
      };
    }
    return todo;
  });
  return {
    ...todo,
    done: !todo.done,
  };
}

const addTodo = (_, { title }) => {
  const newTodo = {
    id: idGenerator(),
    title,
    done: false,
  }
  todos.push(newTodo);
  return newTodo;
}

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
    todos: () => todos,
  },
  Mutation: {
    toggleTodo,
    addTodo
  }
};

export default resolvers;
