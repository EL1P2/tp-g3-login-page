import React from "react";

import "./App.css";
import { MyInput } from "./MyInput";
import { MyCard } from "./MyCard";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <MyCard title="Login">
            <form className="row">
              <div className="col-12">
                <MyInput type="email" placeholder="E-mail" />
              </div>
              <div className="col-12">
                <MyInput type="password" placeholder="Password" />
              </div>
              <div className="col-12">
                <MyInput type="checkbox">Remember password</MyInput>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-2">
                    <a href="">Forgot my password</a>
                  </div>
                  <div className="col-8"></div>
                  <div className="col-2">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </MyCard>
        </div>
      </div>
    </div>
  );
}

export default App;
