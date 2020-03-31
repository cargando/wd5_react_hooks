import React from 'react';
import './App.css';


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			cnt: 0,
		}
	}

	handleClickButton = (e) => {
		const { target } = e;
		let { cnt } = this.state;

		if (target.name == "up") {
			cnt++;
		} else {
			cnt--;
		}
		this.setState({ cnt });
	};

	render() {

	  return (
	    <div className="App">
	      <header className="App-header">
		      <h1>Cnt = { this.state.cnt }</h1>
	        <p>
		        <input name="up" type="button" onClick={ this.handleClickButton } value="Вверхи" /><br />
		        <input name="down" type="button" onClick={ this.handleClickButton } value="Вниз" /><br />

	          Edit <code>src/App.js</code> and save to reload.
	        </p>
	        <a
	          className="App-link"
	          href="https://reactjs.org"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
	          Learn React
	        </a>
	      </header>
	    </div>
	  );

	}
}
export default App;
