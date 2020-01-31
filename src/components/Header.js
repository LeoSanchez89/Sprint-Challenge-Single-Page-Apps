import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledH1 = styled.h1`
	font-size: 3rem;
	color: #39ff14;
	-webkit-text-stroke: 1px green;
	font-weight: bold;
`;

const StyledLink = styled(Link)`
	color: #39ff14;
	font-weight: bold;
	font-size: 1.2rem;
  -webkit-text-stroke: 0.5px green;
  margin-bottom:3%;
  margin-top:3%;
   &:hover{
    color: red;
    text-decoration:none;
  }
`;

const LinkContainer = styled.div`
  display:flex;
  width:50%;
  justify-content:space-evenly;
  margin-left:25%;
  
`;
export default function Header() {
	return (
		<header className="ui centered">
			<StyledH1 className="ui center">Rick &amp; Morty Fan Page</StyledH1>

			<LinkContainer>
				<StyledLink to="/">Home</StyledLink>

				<StyledLink to="/CharacterList">Characters</StyledLink>
			</LinkContainer>
		</header>
	);
}
