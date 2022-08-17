import React from 'react';
import ReactDOM from 'react-dom/client';
import { FunctionComponent, ClassComponent } from './example'
import styles from "./index.module.css";



const from = " name";
const text = " Message text";
const handleClick = () => {
  console.log('click', text);
};

const App = () => {
  return (
    <div className={styles.test}>
      <FunctionComponent
        from={from}
        text={text}
        handleClick={handleClick} />
      <hr />
      <ClassComponent
        from={from}
        text={text}
        handleClick={handleClick} />
    </div>
  );
};


/*---------*/
//ДЗ по уроку (образец):
const Message2 = ({ message }) => {
  return (
    <div>
      <h1>Message2</h1>
      <p>{message}</p>
    </div>
  );
};

const App2 = () => {
  const message = "Hello, world!";

  return <Message2 message={message} />;
};
/*----------*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Message /> */}
    {/* <FunctionComponent />
    <ClassComponent /> */}
    <App />
    <App2 />
  </React.StrictMode>
);





