import React from "react";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
		<main>
			<Header />
     
      <CharacterList/>
		</main>
	);
}
