import "./App.css";
import Table from "./components/Table";

function App() {
	return (
		<>
			<header>
				<h1 className="font-bold my-8 text-4xl text-center text-primary">
					Fetch Data with React
				</h1>
			</header>

			<main>
				<Table></Table>
			</main>
		</>
	);
}

export default App;
