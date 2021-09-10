import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.isAuthentificated);

  return (
    <Fragment>
      <Header />
      {auth && <UserProfile />}
      {!auth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
