import {appStateHOC} from "../components/appStateHOC";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PulsatingDot from '../components/PulsatingDot';
import Part from "../components/Part";

function Workshop( {partNFTs, skinNFTs, fetchNFTs} ) {
	const [activePartType, setActivePartType] = useState();
	const [partsPicked, setPartsPicked] = useState( {} );

	function nftPicked( nft, type ) {
		const newParts = {...partsPicked};
		newParts[type] = nft;
		setPartsPicked( newParts );
	}

	const partTypes = [
		'Head', 'Cooling System', 'Distribution System', 'Engine', 'Battery', 'Upper Leg', 'Lower Leg', 'Hoof',
	];

	const allPartsPicked = Object.keys( partsPicked ).length === partTypes.length;

	return <>
		<h1 className='mv0 f3'>
			<Link to='/' className='chevron-left mr3 fw4 white-70 link'>Back</Link>
			Workshop
		</h1>
		<div className="flex">
			<div className="robot-selected-parts mr4 mr5-l">
				<h2 className='mt4'>Parts for your robot parts</h2>
				<table className='center' cellPadding='0' cellSpacing={0}>
					{partTypes.map( type => <tr>
						<th className='f4 tl pv2 pr4'>
							<div className="w4">{type}</div>
						</th>
						<td className='pl4'>
							<article
								className={`border-box w5 br2 pv2 ph3 mv3 black-80 pointer bg-white${partsPicked[type] ? '' : '-80'}`}
								onClick={e => setActivePartType( activePartType === type ? '' : type )}>
								{partsPicked[type]?.name ||
								 <span className='o-80'>Please choose <PulsatingDot className='nr2 fr'/></span>}
							</article>
						</td>
					</tr> )}
				</table>
				<div className="tr">
					{allPartsPicked ?
						<button className="w5 br2 pv2 ph3 ba b--black-10 mv3 white b--none" style={{background: '#d00'}}>
							Assemble robot!</button> :
						<button className="w5 br2 pv2 ph3 ba b--black-10 mv3 white b--none o-50" disabled
										style={{background: '#d00'}}>
							Select all parts to assemble</button>}
				</div>
			</div>
			{<div>
				<h2 className='mt4'>Inventory {activePartType && ' - ' + activePartType}</h2>
				<div className="nl3 nr3 flex-gallery">
					{partNFTs?.map( ( nft, key ) => {
						const type = nft?.attributes?.PartType || nft?.attributes?.SkinType;
						if ( activePartType && activePartType !== type ) {
							return null;
						}
						return <Part {...{nft, key}} style={{cursor: 'pointer'}} onClick={e => nftPicked( nft, type )}/>
					} )}
				</div>
				<div className="nl3 nr3 flex-gallery">
					{skinNFTs?.map( ( nft, key ) => {
						const type = nft?.attributes?.PartType || nft?.attributes?.SkinType;
						if ( activePartType && activePartType !== type ) {
							return null;
						}
						return <Part {...{nft, key}} style={{cursor: 'pointer'}} onClick={e => nftPicked( nft, type )}/>
					} )}
				</div>
			</div>}
		</div>
	</>;
}

export default appStateHOC( Workshop, {fetchNFTs: true} );
