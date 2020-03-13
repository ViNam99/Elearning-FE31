import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/styles/main.scss";
import ContactPage from "./Pages/ContactPage";
import UserLayout from "./Layouts/UserLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CourseDetail from "./Pages/CourseDetailPage";
import SignIn from "./Components/UserComponent/SignIn";
import SignUp from "./Components/UserComponent/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <UserLayout path="/">
          <Switch>
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courseDetail/:courseId" component={CourseDetail} />
            <Route path="/signIn" component={SignIn}/>
            <Route path="/signUp" component={SignUp}/>
            <Route path="/" component={HomePage} />
          </Switch>
        </UserLayout>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
