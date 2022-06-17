import "./App.css";
import Home from "./components/pages/Home";
import GithubState from "./context/github/githubState";

const App = () => {
  return (
    <GithubState>
      <Home />
    </GithubState>
  );
};

export default App;
