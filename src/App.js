
import './App.css';

import Employee from "./Components/Employee"
import { useState } from 'react';

function App() {

  const showEmployees = true
  console.log("we are about to list employees")
   const [role, setRole] = useState()

  return (
    <div className="App">
        
      {showEmployees ?
      <>  

        <input 
          type="text" 
          onChange={(e)=> {
            console.log(e.target.value)
            setRole(e.target.value)
          }}
  
        />

        <Employee name="Caleb" role="Intern"/>
        <Employee name="Abby" role = {role}/>
        <Employee name="John"/>
      
      </>
      :
      <p>You are not allowed to view employees</p>
      } 
    </div>
  );
}

export default App;
