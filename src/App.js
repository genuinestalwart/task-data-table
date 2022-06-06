import { useState } from "react";
import "./App.css";
import PageNav from "./components/PageNav";
import Table from "./components/Table";

function App() {
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<>
			<header>
				<h1 className="font-bold my-8 text-4xl text-center text-primary">
					Fetch Data with React
				</h1>
			</header>

			<main>
				<Table currentPage={currentPage} setPages={setPages}></Table>
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
