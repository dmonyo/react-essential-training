const { createElement } = React
const { render } = ReactDOM

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}

render(
    <h1
        id="title"
        className="header"
        style={style}>
        Hello World from React using Babel-cli
    </h1>
    ,
    document.getElementById('react-container')
)