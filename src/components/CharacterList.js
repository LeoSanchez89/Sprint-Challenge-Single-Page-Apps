import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const CardContainer = styled.div`
  display:flex;
  justify-content: space-evenly;
  flex-wrap:wrap;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character/")
			.then(response => {
				// console.log(response.data.results);
        const people = response.data.results.filter(person =>
          person.name.toLowerCase().includes(search.toLowerCase())
        );
        setCharacters(people);
			})
			.catch(error => {
				console.error("Server Error", error);
			});
  }, [search]);
  
  
	return (
		<section className="character-list">
			<SearchForm
				characters={characters}
				setSearch={setSearch}
				search={search}
			/>
			<CardContainer>
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
			</CardContainer>
		</section>
	);
}
