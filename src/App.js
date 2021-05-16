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
    <Route path="/user" component={Login}></Route>
    <Route path="/" exact component={ListExercises}></Route>
    <Route path="/edit/:id" component={EditExcercises}></Route>
    <Route path="/create" component={CreateExcercises}></Route>
    
    </Router>
      
    </div>
  );
}

export default App;
