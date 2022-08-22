import {useEffect, useState} from "react";
import {getRobots, getRobotsInRace, getOpenRaceSlotsCount, submitRobotToRace} from '../../services/data';
import {raceTrackImageURI, defaultSpacesInRace} from '../../conf';
import Robot from './Robot';

const GameUI = ({wallet}) => {
	const [ robotNFTs, setRobotNFT ] = useState( [] );
	const [ robotsInRace, setRobotsInRace ] = useState( false );
	const [ openRaceSlotsCount, setOpenRaceSlotsCount ] = useState( false );
	const [ totalSpaces, ] = useState( defaultSpacesInRace );
	const {selectedAddress} = wallet;

	useEffect( () => {
		getRobots( selectedAddress ).then( robots => setRobotNFT( robots ) );
	}, [selectedAddress] );

	useEffect( () => {
		getOpenRaceSlotsCount( wallet ).then( ( num ) => setOpenRaceSlotsCount( num ) );
		getRobotsInRace( wallet ).then( ( robots ) => setRobotsInRace( robots ) );

//		wallet.provider.callContract( {
//			contractAddress: raceContractAddress,
//			entrypoint     : 'getRobotsInRaceCount',
//		} ).then( ({result}) => {
//			setTotalSpaces( + result[0] );
//		} );
	}, [] );

	const submitToRace = tokenId => {
		return submitRobotToRace( wallet, tokenId ).then( ( response ) => {
			if ( ! response ) {
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
		{!!openRaceSlotsCount && <h5 className='fr-l fw3 mv1'>Open slots: {openRaceSlotsCount} / {totalSpaces}</h5>}
		<h3 className='mt0'>Your robots</h3>
		<div className="robots cb flex overflow-auto pa2 b--white-10 ba">
			{robotsInRace && robotNFTs.map( (robot, i) =>
				<Robot key={i} robotInRace={robotsInRace.indexOf( '' + robot.token_id ) > -1} {...{robot, wallet, submitToRace}} />
			)}
		</div>
		<h3>Race track</h3>
		<img src={raceTrackImageURI} alt="Race track image"/>
	</>
};
export default GameUI;