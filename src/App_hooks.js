import React, { useState, useEffect, use } from 'react';
import './App.css';


function Header(props) {

	useEffect(() => {
		console.log("Сработал Hook useEffect для Header при componentDidMount");

		return () => {
			console.log("Сработал Hook useEffect для Header при componentWillUnmount");
		};
	});

	return (<h3>USER = { props.userName }</h3>)

}

function App() {

	// const resOfUseState = useState(0); // результат будет массив, в котором
	// под нулевым индексом будет переменная с данными из стейта на текущий момент времени
	// под первым индексом будет ссылка на функцию, которая умеет апдейтить стейт-переменную
	let [ cnt, setCnt ] = useState(0);
	let [ visibleCnt, setVisibleCnt ] = useState(true);
	let [ msNum, setMsNum ] = useState(0);
	const [ userName, setUserName ] = useState("Иваныч");
	const [ ms, setMs ] = useState([1, 2, 3, 4, 5, 6, 7 , 8, 9, 10]);

	const logger = () => console.log("Сработал Hook useEffect, cnt = ", cnt);

	useEffect(() => {
		console.log("Сработал Hook useEffect при componentDidMount");

		return () => {
			// этот колбэк сработает при аналогично методу жизненного цикла componentWillUnmount
		};
	}, []);

	useEffect(() => {
		logger();

		return () => {
			// этот колбэк сработает при аналогично методу жизненного цикла componentWillUnmount
		};
	}, [cnt]);


	const handleDeleteElement = () => {
		ms.splice(msNum, 1);
		// const msResult = [].concat(ms); - это "эквивалент" записи [...ms]
		setMs([...ms]);
	};

	const handleClickButton = (e) => {
		const { target } = e;
		if (e.target.name == "delete") {
			handleDeleteElement();
			return;
		}

		if (target.name == "up") {
			setCnt( cnt + 1 );
		} else {
			setCnt( cnt - 1 );
		}

	};

	const handleChange = (e) => {
		const { value } = e.target;
		if (e.target.name == "name") {
			setUserName(value);
		} else if (e.target.name == "view") {
			setVisibleCnt(!visibleCnt);
		} else {
			setMsNum(+value)
		}
	};

  return (
	  <div className="App">
		  <header className="App-header">
			  <h1>Cnt with Hooks = { cnt }</h1>
			  {
				  visibleCnt && (<Header userName={ userName } />)
			  }
			  <input type="text" name="name" value={ userName } onChange={ handleChange } />
			  <input type="checkbox" name="view" checked={ visibleCnt } onChange={ handleChange } />
			  <p>
				  <input name="up" type="button" onClick={ handleClickButton } value="Вверхи" /><br />
				  <input name="down" type="button" onClick={ handleClickButton } value="Вниз" /><br />

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
			  <br />
			  <h3>{ ms.join(", ") }</h3>
			  <input type="number" name="msNumber" value={ msNum } onChange={ handleChange } /><br />
			  <input name="delete" type="button" onClick={ handleClickButton } value="Удалить элемент" /><br />
		  </header>

	  </div>
  );
}

export default App;
