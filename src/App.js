import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './layout/Header'
import Home from './pages/Home'
import AppContext from './app/AppContext';
import {useEffect, useState} from "react";

function App() {
	const [ wallet, setWallet ] = useState();
	useEffect( () => {}, [] );
	return (
		<BrowserRouter>
			<AppContext.Provider value={{
					wallet,
					isConnected: !!wallet?.isConnected,
					setWallet
				}}>
				<div className="App min-vh-100 flex flex-column w-100 bg-near-black near-white">
					<header className="dt w-100 border-box pa3 ph4-ns bb b--white-10">
						<Header/>
					</header>

					<section className='w-100 pa3 ph4-ns'>
						<Routes>
							<Route path="/">
								<Route index element={<Home/>}/>
								<Route path="workshop" element={<Workshop />}/>
								{/*<Route path={'*'} element={<Home/>}/>*/}
								{/*<Route path="*" element={<NoPage />} />*/}
							</Route>

					</section>
				</div>
			</AppContext.Provider>
	);
}

export default App;
