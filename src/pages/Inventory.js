import {appStateHOC} from "../components/appStateHOC";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import Part from '../components/Part';

function Inventory( {allNFTs, partNFTs, skinNFTs, fetchNFTs} ) {

	return <>
		<h1 className='mv0 f3'>
			<Link to='/' className='chevron-left mr3 fw4 white-70 link'>Back</Link>
			Inventory
		</h1>
		<div className="parts">
			{/*{partNFTs.map( p => <Part /> )}*/}
		</div>
	</>;
}

export default appStateHOC( Inventory, {fetchNFTs: true} );
