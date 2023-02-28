import './App.css';
import {useState} from "react";

function Square({isHidden, onClickHandler}) {
  return <div className={`square ${isHidden ? 'hidden' : 'visible'}`} onClick={onClickHandler}></div>
}

function showSquare (id, data) {
  return data.map((element) => id === element.id? ({...element, isHidden: !element.isHidden}) : element)
}

function App() {
  const initialData = Array(9)
      .fill()
      .map((_, index) => ({id: index + 1, isHidden: [4,5].some((el) => index === el)}));
  const [state, setState] = useState(initialData);

  const onClickHandler = (propId) => {
    setState((prev) => showSquare(propId, prev))

    setTimeout(() => {
      setState((prev) => showSquare(propId, prev))
    }, 3000)
  }

  return (
    <div className="App">
      {
        state
            .map(({id, isHidden}) =>
                <Square key={id} isHidden={isHidden} onClickHandler={() => onClickHandler(id)} />)
      }
    </div>
  );
}

export default App;
