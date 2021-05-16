import Navbar from "./components/navbar";
import ListExercises from "./components/ListExercises"
import {BrowserRouter as Router,Route} from "react-router-dom"
import EditExcercises from "./components/EditExercises";
import CreateExcercises from "./components/AddExercise";
import Login from "./components/login";
function App() {
  return (
    <div className="App">
    <Router><Navbar/>
    <Route path="/user" exact component={Login}></Route>
    <Route path="/" exact component={ListExercises}></Route>
    <Route path="/create" exact component={CreateExcercises}></Route>
    <Route path="/edit/:id" exact component={EditExcercises}></Route>
    
    </Router>
      
    </div>
  );
}

export default App;
