import React, {useState} from 'react';
import LoginForm from './component/LoginForm';

function App() {
  const adminUser = {
    email: "Login@gmail.com",
    password : "Login212"
}
const [user, setUser]= useState({name:"", email: ""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if( details.email == adminUser.email && details.password == adminUser.password)
  console.log("Youre logged in");
  setUser({
    name: details.name,
    email:details.email
  });
} 
  else{
  console.log("Please enter details or check if they are correct");
    setError("Please enter details or check if they are correct");
   }

  const Logout = () => {
  setUser({name: "", email= "" 
  });
}

  return(
    <div className= "App">
      {(
        user.email != "") ?(
          <div className = "HelloandWelcome">
            <h2> Hello and welcome, <span> {user.name}</span></h2>
            <button onClick={Logout}> Logout</button>
            </div>
        ):(
        <LoginForm Login= {login} error = {error}/>
      )}
    </div>

  )

}
export default App;
