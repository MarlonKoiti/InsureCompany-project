import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/login">
        </Route>
      </Routes>
    </Router>
  )
}