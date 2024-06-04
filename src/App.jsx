import { useContext } from "react";
import { SideBar, Player, Display } from "./components";
import { PlayerContext } from "./context/playerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  console.log("==?", track);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
