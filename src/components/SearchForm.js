import React from "react";
import { InputGroup, Input } from "reactstrap";
import styled from "styled-components";

const StyledForm = styled.form`
	width:60%;
	margin-left: 20.5%;
	margin-bottom:2%;
`;

export default function SearchForm(props) {
	const handleInputChange = event => {
		props.setSearch(event.target.value);
	};

	return (
		<section>
			<StyledForm>
				<InputGroup>
					<Input
						type="text"
						onChange={handleInputChange}
						value={props.search}
						name="name"
						placeholder="Character Search"
						autoComplete="off"
					/>
				</InputGroup>
			</StyledForm>
		</section>
	);
}
