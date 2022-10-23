import AppContext from "../app/AppContext";
import {useEffect} from "react";

export function appStateHOC( WrappedComponent, prefs = {} ) {
	function InnerWrapper( props ) {
		const {fetchNFTs, allNFTs, wallet} = props;

		// Fetch NFTs if needed
		useEffect( () => {
			prefs.fetchNFTs && !allNFTs?.length && fetchNFTs()
		}, [wallet?.selectedAddress] );
		return <WrappedComponent {...props} />
	}

	return ( props ) => {
		return <AppContext.Consumer>{state => <InnerWrapper {...state} {...props} />}</AppContext.Consumer>
	}
}