import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
	font-size: 3rem;
	color: #39ff14;
	-webkit-text-stroke: 1px green;
  font-weight: bold;
  
`;

const HomeContainer = styled.section`
display:flex;
flex-direction:column;

align-items:center;
`;

const StyledImg = styled.img`
  width:30%;
  margin:2%;
`;

export default function WelcomePage() {
  return (
		<HomeContainer>
			<header>
				<StyledH1>Welcome to the ultimate fan site!</StyledH1>
      </header>
      
			<StyledImg
				className="main-img"
				src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
				alt="rick"
			/>
		</HomeContainer>
	);
}
