import { SideBar, Player } from "./components";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar />
      </div>
      <Player />
    </div>
  );
};

export default App;
