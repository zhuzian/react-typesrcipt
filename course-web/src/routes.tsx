import React, { useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import API from "./api";
import BasicLayout from "./components/BasicLayout";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import RetrievePassword from "./components/RetrievePassword";

interface IProps {}
const MRouter = (props: IProps) => {
  // const employee = useSelector((state: IState) => state.employee)
  // useEffect(() => {
  //     console.log(employee, Date.parse(new Date().toString()));

  // }, [employee])

  const onEnter = useCallback((Component, props) => {
    if (API.hasLogin()) {
      return <Component {...props} />;
    }
    return <Redirect to="/login" />;
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>

          <Route  path="/retrieve" component={RetrievePassword}></Route>


          <Route
            path="/"
            render={(props) => onEnter(BasicLayout, props)}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default MRouter;
