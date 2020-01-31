import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character/")
			.then(response => {
				console.log(response.data.results);
				setCharacters(response.data.results);
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}, []);

	return (
		<section className="character-list">
			<SearchForm data={characters} />
			{characters.map(character => (
				<CharacterCard
					key={character.id}
					name={character.name}
					image={character.image}
					species={character.species}
					gender={character.gender}
					status={character.status}
				/>
			))}
		</section>
	);
}
