import { useState } from 'react'

// const f1 = () => { return true }
// const f2 = () => (true)

const CityList = ({ cities, deleteCity, editCity }) => {
	const [editingId, setEditingId] = useState(null)
	const [newName, setNewName] = useState('')
	const [newPop, setNewPop] = useState('')

	const handleEdit = (id, name, population) => {
		setEditingId(id)
		setNewName(name)
		setNewPop(population)
	}
	const handleSave = (id) => {
		setEditingId(null)
		editCity(id, newName, newPop)
	}

	return (
		<ul>
			{/* <li>
				<input type="text"
					value="Ulan Bator"
					/>
				, 
				<input type="text"
					value="150000"
					/>
				invånare
				<button> Ta bort </button>
			</li> */}
			{cities.map(({ cityName, id, population }) => (
				<li key={id}>
					{editingId === id ? (
						<>
						<input type="text"
							value={newName}
							onChange={event => setNewName(event.target.value)}
							/>,
						<input type="number"
							value={newPop}
							onChange={event => setNewPop(event.target.value)}
							/> invånare
						<button onClick={() => handleSave(id)}> Spara </button>
						</>
					) : (
						<>
						{cityName}, {population} invånare
						<button onClick={() => handleEdit(id, cityName, population)}> Ändra </button>
						</>
					)}
					<button onClick={() => deleteCity(id)}> Ta bort </button>
				</li>
			))}
		</ul>
	)
}

export default CityList
