import React, { useState } from "react";

export default function SearchForm(props) {
  
  const handleInputChange = event => {
		props.setSearch(event.target.value);
  };
  


  return (
		<section>
			<form className="search">
				<input
					type="text"
					onChange={handleInputChange}
					value={props.search}
					name="name"
					placeholder="Character Search"
					autoComplete="off"
				/>
			</form>
		</section>
	);
}
