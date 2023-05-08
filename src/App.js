
import './App.css';

import Employee from "./Components/Employee"

function App() {
  
  const showEmployees = true
  console.log("we are about to list employees")


  return (
    <div className="App">
      { console.log("Inside the return ")}
        
      {showEmployees ?
      <>  
        <Employee/>
        <Employee/>
        <Employee/>
        <Employee/>
      </>
      :
      <p>You are not allowed to view employees</p>
      } 
    </div>
  );
}

export default App;
