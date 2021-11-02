import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./component/Fotter/Footer";
import Home from "./component/Home/Home";
import Myorder from "./component/Myorder/Myorder";
import ManAllOrder from "./component/ManAllOrder/ManAllOrder";
import Login from "./component/Login/Login";
import AddService from "./component/AddService/AddService";
import NotFound from "./component/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import PlaceBook from "./component/PlaceBook/PlaceBook";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myorder">
              <Myorder></Myorder>
            </PrivateRoute>
            <PrivateRoute path="/manallorder">
              <ManAllOrder></ManAllOrder>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path="/placebook/:id">
              <PlaceBook></PlaceBook>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
