import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Link, Switch } from "react-router-dom"

// This works
// import Page1 from "./Page1"
// import Page2 from "./Page2"

// This doesn't work, but only if the image is present in the page
// If you remove the image from the page and the image import, then dynamic import works fine
const Page1 = lazy(() => import("./Page1"))
const Page2 = lazy(() => import("./Page2"))

const App = function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <h1>Page</h1>
        <Link to={"/"}>Page 1</Link> | <Link to={"/page2"}>Page 2</Link>

        <Switch>
          <Page1 path={"/"} exact={true} />
          <Page2 path={"/page2"} />
        </Switch>
      </Suspense>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
