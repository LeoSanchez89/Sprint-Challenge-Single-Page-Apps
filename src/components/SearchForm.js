import React from "react";
import { InputGroup, Input } from "reactstrap";

export default function SearchForm(props) {
	const handleInputChange = event => {
		props.setSearch(event.target.value);
	};

	return (
		<section>
			<form>
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
			</form>
		</section>
	);
}
