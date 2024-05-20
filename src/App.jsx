import Sidebar from "./components/SideBar";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="flex h-[90%]">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
