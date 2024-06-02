import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import NavBar from "./NavBar";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              image={item.image}
              name={item.name}
              desc={item.desc}
              key={index}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">{`Today's biggest hits`}</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, key) => (
            <SongItem
              key={key}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
