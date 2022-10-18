import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './layout/Header'
import Home from './pages/Home'
import Workshop from './pages/Workshop'
import Inventory from './pages/Inventory'
import AppContext from './app/AppContext';
import {useEffect, useState} from "react";
import {fetchNFTsFromAspect} from "./services/data";

function App() {
	const [context, _setContext] = useState( {
		wallet: {},
		nfts  : null,
	} );
	const fetchNFTs = () => {
		const {selectedAddress} = context.wallet || {};
		selectedAddress && fetchNFTsFromAspect( selectedAddress )
			.then( nfts => {
				const partNFTs = [], skinNFTs = [], robotNFTs = [], allNFTs = [];
				nfts.forEach( ( {token_id, name, description, attributes, image_uri} ) => {
					const nftData = {
						token_id, description, image_uri,
						name      : name.replace( 'Redline Alpha: ', '' ),
						attributes: {}
					};
					attributes.forEach( ( {trait_type, value} ) => {
						if ( value && value !== '0' ) {
							nftData.attributes[trait_type.replace( ' ', '' )] = value
						}
					} );
					allNFTs.push( nftData );
					if ( nftData.attributes['PartType'] ) {
						partNFTs.push( nftData );
					} else if ( nftData.attributes['SkinType'] ) {
						skinNFTs.push( nftData );
					} else {
						robotNFTs.push( nftData );
					}
				} );
				setContext( {allNFTs, partNFTs, skinNFTs, robotNFTs} )
			} );
	}

	function setContext( newContext ) {
		_setContext( {...context, ...newContext} )
	}

	return (
		<BrowserRouter>
			<AppContext.Provider value={{...context, setContext, fetchNFTs}}>
				<div className="App min-vh-100 flex flex-column w-100 bg-near-black near-white">
					<header className="dt w-100 border-box pa3 ph4-ns bb b--white-10">
						<Header/>
					</header>

					<section className='w-100 pa3 ph4-ns'>
						<Routes>
							<Route path="/">
								<Route index element={<Home/>}/>
								<Route path="workshop" element={<Workshop/>}/>
								<Route path="inventory" element={<Inventory/>}/>
								{/*<Route path={'*'} element={<Home/>}/>*/}
								{/*<Route path="*" element={<NoPage />} />*/}
							</Route>
						</Routes>
					</section>
				</div>
			</AppContext.Provider>
		</BrowserRouter>
	);
}

export default App;
