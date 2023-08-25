import "./App.css";

import { MusicContext } from "./contexts/MusicContext";

import { PlayerControls } from "./components/PlayerControls";

import { useState } from "react";
import TrackList from "./components/TrackList";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),

    tracks: [
      {
        name: "Track 1",

        file: "",
      },

      {
        name: "Track 2",

        file: "",
      },
    ],

    currentTrackIndex: 0,

    isPlaying: false,
  });

  console.log("State: ", state);

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
