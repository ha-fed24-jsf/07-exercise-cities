
// const f1 = () => { return true }
// const f2 = () => (true)

const CityList = ({ cities }) => (
	<ul>
		{cities.map(({ cityName, id, population }) => (
			<li key={id}> {cityName}, {population} invånare </li>
		))}
	</ul>
)

export default CityList
