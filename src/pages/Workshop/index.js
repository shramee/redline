import {appStateHOC} from "../../components/appStateHOC";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import Part from './Part';

function Index( {partNFTs, skinNFTs, fetchNFTs} ) {
	useEffect( () => fetchNFTs(), [] );

	const partTypes = [
		'Head', 'Cooling System', 'Distribution System', 'Engine', 'Battery', 'Upper Leg', 'Lower Leg', 'Hoof', 'Error',
	];
	const partByTypes = {};

	partTypes.forEach( partType => partByTypes[partType] = [] );

	partNFTs.forEach( part => {
		if ( ! partTypes[part.attributes.PartType] ) {
			partTypes[part.attributes.PartType] = [];
		}
		partTypes[part.attributes.PartType].push( part )
	} );

	return <>
		<h1 className='mv0 f3'>
			<Link to='/' className='chevron-left mr3 fw4 white-70 link'>Back</Link>
			Workshop
		</h1>
		<div className="parts">
			{partNFTs.map( p => <Part /> )}
		</div>
	</>;
}

export default appStateHOC( Index );
