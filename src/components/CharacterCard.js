import React from "react";
import styled from "styled-components";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const StyledH2 = styled.h2`
	font-size: 2rem;
	color: #39ff14;
	-webkit-text-stroke: 1px green;
`;

const CardBox = styled.div`
  width: 35%;
  margin:1%;
`;

const StyledP = styled.p`
	font-size: 1.2rem;
	-webkit-text-stroke: 1px green;
`;

export default function CharacterCard(props) {
	return (
		<CardBox>
			<Card
				body
				body
				inverse
				style={{ backgroundColor: "#333", borderColor: "#39ff14" }}
				key={props.key}
			>
				<CardImg src={props.image}></CardImg>
				<CardBody className="text-center">
					<CardTitle>
						<StyledH2>{props.name}</StyledH2>
					</CardTitle>
					<CardText>
						<StyledP>
							<strong>Species:</strong> {props.species}
						</StyledP>
						<StyledP>
							<strong>Gender:</strong> {props.gender}
						</StyledP>
						<StyledP>
							<strong>Status:</strong> {props.status}
						</StyledP>
					</CardText>
				</CardBody>
			</Card>
		</CardBox>
	);
}
