import { useState } from 'react'
import './App.css'
import CityList from './components/CityList.jsx'
import { cities as cityList } from './data/cities.js'

function App() {
	const [cities, setCities] = useState(cityList)

	const deleteCity = idToDelete => {
		setCities(cities.filter(city => city.id !== idToDelete))
	}
	
	return (
		<div className="app">
			<header>
				Övningar
			</header>
			<main>

				<CityList
					cities={cities}
					deleteCity={deleteCity}
					/>

			</main>
		</div>
	)
}

export default App
