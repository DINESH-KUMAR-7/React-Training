
import A2 from './A2';//q3 - answer
import './App.css';
import B from './B';//q2 - answer
import HelloWorld from './HelloWorld';//q1 - answer
import M2 from './M2';

//app component
export default function App() {
  function X(){
    return "Hello"
  }
  return (
    <>
      <h1>Question 1</h1>
      <HelloWorld/>
      <hr></hr>
      
      <h1>Question 2</h1>
      <B/>
      <hr></hr>

      <h1>Question 3</h1>
      <A2/>
      <hr></hr>

      <h1>Question 4</h1>
      <M2/>
      <hr></hr>

      <h1>Question 5</h1>
      <div className="App">
        <h1>{X()}</h1>
      </div>
    </>
  );
}
// if i removed X rounded brackets it won't print "Hello"
//export default App;
