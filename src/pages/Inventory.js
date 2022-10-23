import {appStateHOC} from "../components/appStateHOC";
import {Link} from "react-router-dom";
import Part from '../components/Part';

function Inventory( {allNFTs, partNFTs, skinNFTs, fetchNFTs} ) {

	return <>
		<h1 className='mv0 f3'>
			<Link to='/' className='back-link mr3 fw4 white-70 link'>Back</Link>
			Inventory
		</h1>
		<h2 className='mb0 f4'>
			Parts
		</h2>
		<div className="parts nl3 nr3 horizontal-scroll">
			{partNFTs?.map( (nft, key) => <Part {...{nft, key}} /> )}
		</div>
		<h2 className='mb0 f4'>
			Skins
		</h2>
		<div className="parts nl3 nr3 horizontal-scroll">
			{skinNFTs?.map( (nft, key) => <Part {...{nft, key}} /> )}
		</div>
	</>;
}

export default appStateHOC( Inventory, {fetchNFTs: true} );
