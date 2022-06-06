import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PageNav from "./components/PageNav";
import Table from "./components/Table";

function App() {
	const [pages, setPages] = useState(0);
	const [query, setQuery] = useState("");
	const [search, setSearch] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<>
			<header>
				<h1 className="font-bold my-8 text-4xl text-center text-primary">
					Fetch Data with React
				</h1>
			</header>

			<main>
				<Filter setQuery={setQuery} setSearch={setSearch}></Filter>
				<Table
					currentPage={currentPage}
					query={query}
					search={search}
					setPages={setPages}
				></Table>
				<PageNav
					currentPage={currentPage}
					pages={pages}
					setCurrentPage={setCurrentPage}
				></PageNav>
			</main>
		</>
	);
}

export default App;
