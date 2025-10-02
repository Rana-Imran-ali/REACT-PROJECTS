
import "./App.css";

function title(){
  return <h1>I am the title
  </h1>;
}

function App() {
 return( <div>
  <h1>App component</h1>
  <Fruit/>
  <title />
  <color/>
 </div>
 )
}
// Making component is react

function Fruit(){
  return(
     //<div>
      <h1>Fruits list</h1>
     //<h2>Apple</h2>
    // <h2>Banana</h2>
    // <h2>Orange</h2>
    // <title/>

     //</div>
  )
}
function color(){
  return(
    <h1>Black color</h1>
  )
}


export default App;
