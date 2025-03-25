
// const f1 = () => { return true }
// const f2 = () => (true)

const CityList = ({ cities, deleteCity }) => (
	<ul>
		{cities.map(({ cityName, id, population }) => (
			<li key={id}>
				{cityName}, {population} invånare
				<button onClick={() => deleteCity(id)}> Ta bort </button>
			</li>
		))}
	</ul>
)

export default CityList
