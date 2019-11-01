- [x] Why would you use class component over function components (removing hooks from the question)?

-- Functional components don't have state, life cycle methods, or _this_, whereas, class components do.

- [x] Name three lifecycle methods and their purposes.

-- *constructor()* - Typically, in React constructors are only used for two purposes: Initializing local state by assigning an object to this.state and binding event handler methods to an instance.

-- *render()* - Puts state into the DOM. The render() method is the only required method in a class component. When called, it should examine this.props and this.state and return react elements, arrays, fragments, portals, strings, numbers, booleans, or null.

-- *componentDidMount()* - Invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

- [x] What is the purpose of a custom hook?

-- Hooks let you use state and other React features without writing a class. Building your own Hooks lets you extract component logic into reusable functions. A custom Hook is a Javascript function whose name starts with "use" and that may call other Hooks.

- [x] Why is it important to test our apps?

-- The main reason to write tests is to _ensure that your app works the way it should._ It allows us to identify issues or bugs in our app that may not be immediately obvious.