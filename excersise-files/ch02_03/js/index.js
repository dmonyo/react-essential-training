const { createElement } = React
const { render } = ReactDOM

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}

const title = createElement(
    'h1',
    {
        id: 'title', 
        className: 'header',
        style: style
    },
    "Hello World from ReactJS"
)

render(
    <h1
        id="title"
        className="header"
        style={style}>
        Hello World from React using Babel
    </h1>
    ,
    document.getElementById('react-container')
)