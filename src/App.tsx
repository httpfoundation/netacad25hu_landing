import React from 'react'
import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

export const AppContext = React.createContext<undefined | {apiKey: string}>(undefined)

function App() {

	return (
		<AppContext.Provider 
			value={{apiKey: "1a6a606f0a56bde210db59c9fbf601"}}
		>
			<LandingPage />
			
		</AppContext.Provider>
	)
}

export default App

const LandingPage = () => (
	<>
			<Header />
			<Main />
			<Footer />
	</>
)



