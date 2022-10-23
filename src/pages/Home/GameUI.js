import {useEffect, useState} from "react";
import {fetchNFTsFromAspect, getRobotsInRace, getOpenRaceSlotsCount, submitRobotToRace} from '../../services/data';
import {raceTrackImageURI, defaultSpacesInRace} from '../../conf';
import Robot from './Robot';
import {Link} from "react-router-dom";

const GameUI = ( {wallet, robotNFTs, fetchNFTs} ) => {
	const [robotsInRace, setRobotsInRace] = useState( false );
	const [openRaceSlotsCount, setOpenRaceSlotsCount] = useState( false );
	const [totalSpaces,] = useState( defaultSpacesInRace );

	useEffect( () => {
		getOpenRaceSlotsCount( wallet ).then( ( num ) => setOpenRaceSlotsCount( num ) );
		getRobotsInRace( wallet ).then( ( robots ) => setRobotsInRace( robots.map( r => `${r}` ) ) );
	}, [] );

	const submitToRace = tokenId => {
		return submitRobotToRace( wallet, tokenId )
			.then( ( response ) => {
				if ( !response ) {
					alert( 'Oops, the transaction failed.' );
				} else if ( response.code === "TRANSACTION_RECEIVED" ) {
					getRobotsInRace( wallet ).then( ( robots ) => setRobotsInRace( robots ) );
					return true;
				} else {
					console.error( response );
					alert( 'Some error occurred, please let us know what happened!\n Error message: ' + response.code );
				}
				return false;
			} )
			.catch( e => {
				console.error( e );
				alert( 'Some error occurred, please let us know what happened!\n Error message: ' + e );
			} );
	};

	return <>
		<Link className='fr br2 bw1 dib dim f7 lh-solid fw5 link ph3 pv2 bg-dark-red white ttu'
					to='workshop'>Workshop</Link>
		<h3 className='mt0'>Your robots</h3>
		<div className="robots cb flex overflow-auto pa2 b--white-10 ba">
			{!!robotsInRace && !!robotNFTs && !!robotNFTs.length ?
				<>
					{robotNFTs.map( ( robot, i ) =>
						<Robot key={i}
									 robotInRace={robotsInRace.includes( `${robot.token_id}` )} {...{robot, wallet, submitToRace}} />
					)}
				</> :
				<div className='f5 pv5 center tc'>
					<div className='tracked pb4'>
						You don't have any robots
					</div>
					<Link className='br2 bw1 dib dim f7 lh-solid fw5 link ph3 pv2 bg-white-20 white ttu' to='/workshop'>Go to
						Workshop</Link>
				</div>

			}
		</div>

		<h3>Race track</h3>
		<img src={raceTrackImageURI} alt="Race track image"/>
	</>
};
export default GameUI;