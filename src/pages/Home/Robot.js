import {useState} from "react";

const Robot = ( {robot, robotInRace, submitToRace} ) => {
	const [ robotAddedToRace, setRobotsAddedToRace ] = useState( false );

	const {name, token_id, /*token_uri, contract_address,*/ image_uri, attributes} = {
		...robot,
		attributes: robot.attributes || [],
		name: robot.name || 'Metadata not found'
	};

	const optimisedImage = image_uri && `https://redline.game/a/birme-256xauto/${image_uri.split( '/' ).at( - 1 ).split( '.' )[0]}.webp`;

	return <div className='w5 ma2 pa1 flex-shrink-0 flex robot'>
		<div key='sec0' className="w-50 pr2">
			{optimisedImage ?
				<img src={optimisedImage} alt={name} className="db br1"/> :
				<div className="aspect-ratio aspect-ratio--1x1">
					<div className="aspect-ratio--object cover bg-dark-gray" />
				</div>
			}
			{robotInRace ?
				<button disabled className="b b--solid ba bg-black br1 mt2 pa1 ttu w-100 b--inherit" style={{color: '#e00'}}>
					Racing
				</button> :
				(robotAddedToRace ?
					<button disabled className="b b--solid ba bg-black br1 mt2 pa1 ttu w-100 b--inherit" style={{color: '#e00'}}>
						Added
					</button> :
					<button onClick={
					e => submitToRace( token_id )
						.then( e => setRobotsAddedToRace( e ) )
				} className="pointer glow o-80 b b--solid b--white ba bg-black br1 mt2 pa1 ttu w-100 white">
					Submit
				</button>)
			}
		</div>
		<div key='sec1' className="w-50 pl1">
			<h5 className='ma0 mb2'>
				ID: {token_id}
				<span className="fw4 o-70 ml2">{name}</span>
			</h5>
			<dl className="stats ma0 pt1">
				{Object.keys(attributes).map( ( trait_type, i ) => {
					return <div key={i}>
						<dt key={'dt' + i} className="f7 tracked-tight ttu ml0 fl">{trait_type.replace( /([A-Z])/g, ' $1' )}</dt>
						<dd key={'dd' + i} className="f6 b ml0 tr mb1">{attributes[trait_type]}</dd>
					</div>;
				} )}
			</dl>
		</div>
	</div>;
}

export default Robot;