# A Static Page with React.

# About this Project.

A long time ago, i was learning about create-react-app CLI and its tools, when i asked myself, how react works, how can Next for example to make SSR (Server side rendenring), and i decided to study about React Library.

And now i have been created a React App in a HTML static file.

# Why

This project is to my personal portfolio, to add my new skills at react library.

# Getting Started

- You just need for this project a node package manager like npm or yarn.

- # 1 Step

you have to create a folder and install the follow librarys:

- [Browserify](https://www.npmjs.com/package/browserify) - To build the static file.
- [Reactify](https://www.npmjs.com/package/reactify) - It's a template for browserify build.
- [React](https://www.npmjs.com/package/react) - The react library from facebook.
- [React-DOM](https://www.npmjs.com/package/react-dom) = The react-dom library from facebook

## Command: 
```
$ yarn add browserify reactify react react-dom
```

- # 2 Step

structure folder's and files for better development.

let's getting started with the folders:

i recommend the follow set:

- react-scripts: the folder you will save the react components, prefer to use react-scripts/component_name for a better guide on your development process.

- static: to add your page contents, like XAMPP server, for example.

- ## Folder

![Image by the Folder Structure](https://github.com/colligii/react-static-htmlpage/blob/main/img/folder_structure.png?raw=true)

- In the react-scripts is prefered to create a folder with the route name or component name.

- ## Files

- the best structure is something like create-react-app CLI do:
    - index.jsx: is the main file.
    - app.jsx: is the app file
    - name-of-route-or-component.jsx : inside here you have your component or route content.

![Image by the React Structure](https://github.com/colligii/react-static-htmlpage/blob/main/img/react-structure.png?raw=true)

## Insithe the Files (Example of a sample react Counter):

- index.jsx :
```
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app.jsx');

ReactDOM.render(
    <App/>,
    document.querySelector('#counter-js')
)
```

- app.jsx

```
var React = require('react');
var Counter = require('./counter.jsx')

function App() {
    return <Counter/>
}

module.exports = App;
```

- counter.jsx

```
var React = require('react');

function Counter() {
    const [ counter, setCounter ] = React.useState(0);

    return (
        <div className="react-counter">
            <h1>{counter}</h1>
            <div className="react-counter-action">
                <input type="button" value="Add" onClick={() => setCounter(counter+1)}/>
                <input type="button" value="Remove" onClick={() => {if(counter >= 1) setCounter(counter-1)}}/>
            </div>
        </div>
    );

}

module.exports = Counter;
```

- # 3 Step

And when you finish your react code process you just have to build using yarn and reactify.

Command
```
$ yarn browserify -t reactify main_react_folder/index.jsx -o output_folder/build.js
```

and import in HTML like any another .js file

# 4 Step (Optional): 

to create something like SSR you just have to do: 

change this:

```
ReactDOM.render(
    <App/>,
    document.querySelector('#counter-js')
)
```

to this:

```
ReactDOM.hydrate(
    <App/>,
    document.querySelector('#counter-js')
)
```

and add this to your index.jsx file: 

```
var ReactDOMServer = require('react-dom/server');

console.log(ReactDOMServer.renderToString(<App/>));
```

it's gonna to be something like this: 

```
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app.jsx');
var ReactDOMServer = require('react-dom/server');

console.log(ReactDOMServer.renderToString(<App/>));
ReactDOM.hydrate(
    <App/>,
    document.querySelector('#counter-js')
)
```

build  and import again, go to your browser console and copy the element is display in console, and ad to your .html file, USING JUST A LINE FOR THIS.

now you can return your code to normal: 
```
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app.jsx');

ReactDOM.hydrate(
    <App/>,
    document.querySelector('#counter-js')
)
```

and build again.

# To Download this project:

use the follow command:

```
$ git clone https://github.com/colligii/react-static-htmlpage
$ cd react-static-htmlpage
$ npm i
```

# Happy Hacking 😎😎😎😎