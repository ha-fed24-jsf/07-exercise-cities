// import { useState } from 'react'
import './App.css'
import CityList from './components/CityList.jsx'
import { cities } from './data/cities.js'

function App() {

	return (
		<div>
			<header>
				Övningar
			</header>
			<main>

				<CityList cities={cities} />

			</main>
		</div>
	)
}

export default App
