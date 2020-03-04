import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/styles/main.scss";
import ContactPage from "./Pages/ContactPage";
import UserLayout from "./Layouts/UserLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CourseDetail from "./Pages/CourseDetailPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <UserLayout path="/">
          <Switch>
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/course-detail" component={CourseDetail} />
            <Route path="/" component={HomePage} />
          </Switch>
        </UserLayout>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
