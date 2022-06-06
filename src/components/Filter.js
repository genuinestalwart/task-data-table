import React from "react";

const Filter = ({ setQuery, setSearch }) => {
	const handleQuery = (e) => {
		setQuery(e.target.value);
	};

	const handleSearch = () => {
		setSearch(true);
	};

	return (
		<div className="flex justify-between px-20">
			<div>
				<div className="form-control">
					<label className="space-x-2">
						<span>Show</span>
						<input
							type="number"
							defaultValue={10}
							className="input input-bordered"
						/>
						<span>Entries</span>
					</label>
				</div>
			</div>

			<div>
				<div className="form-control">
					<label className="input-group">
						<input
							onChange={handleQuery}
							type="text"
							className="input input-bordered"
						/>
						<button
							onClick={handleSearch}
							className="bg-opacity-75 border-0 btn btn-primary"
						>
							Search
						</button>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Filter;
