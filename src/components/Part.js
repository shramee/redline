import acceleration from '../assets/stat-icons/acceleration.svg';
import adherence from '../assets/stat-icons/adherence.svg';
import balance from '../assets/stat-icons/balance.svg';
import braking from '../assets/stat-icons/braking.svg';
import cooling from '../assets/stat-icons/cooling.svg';
import driving from '../assets/stat-icons/driving.svg';
import energyconsumption from '../assets/stat-icons/energyconsumption.svg';
import energyproduction from '../assets/stat-icons/energyproduction.svg';
import energystorage from '../assets/stat-icons/energystorage.svg';
import enginestart from '../assets/stat-icons/enginestart.svg';
import heatproduction from '../assets/stat-icons/heatproduction.svg';
import hoofsize from '../assets/stat-icons/hoofsize.svg';
import justice from '../assets/stat-icons/justice.svg';
import load from '../assets/stat-icons/load.svg';
import maxhealth from '../assets/stat-icons/maxhealth.svg';
import maxspeed from '../assets/stat-icons/maxspeed.svg';
import unbalance from '../assets/stat-icons/unbalance.svg';

const statIcons = {
	acceleration, adherence, balance, braking, cooling, driving, energyconsumption, energyproduction,
	energystorage, enginestart, heatproduction, hoofsize, justice, load, maxhealth, maxspeed, unbalance,
};
const stats = {
	'MaxSpeed'    : '',
	'Acceleration': '',

	'Adherence': '',
	'HoofSize' : '',
	'Braking'  : '',

	'Balance'       : '',
	'Driving'       : '',
	'Cooling'       : '',
	'HeatProduction': '',

	'EnergyProduction' : '',
	'EnergyStorage'    : '',
	'EnergyConsumption': '',

	'Load'     : '',
	'Unbalance': '',
	'MaxHealth': '',

	'EnergyType' : '',
	'EngineStart': '',

	'MaxSpeedRange'    : '',
	'AccelerationRange': '',
	'BrakingRange'     : '',

	'Brand'   : '',
	'Sponsor' : '',
	'PartName': '',
	'Price'   : '',
}

export default function Part( {nft, onClick, style} ) {
	if ( !nft ) {
		return null;
	}
	const {attributes, image_uri} = nft;
	const name = nft.name || 'Untitled';
	const {PartType, SkinType} = attributes;
	const type = PartType || SkinType;

	// Don't render Error parts
	if ( type === 'Error' ) {
		return null;
	}

	return <article onClick={onClick} className="w5 bg-white br2 pa2 ba b--black-10 ma3" style={{
		backgroundImage: 'linear-gradient(90deg, #e6e6e6 33%, #dcdcdc 33%,#dcdcdc 66%, #e6e6e6 66%)',
		...style
	}}>
		<div className="tc">
			<div className="cf mb3">
				{/*<div className="f7 ttu black-40 fw4 tracked fr">{type}</div>*/}
				<div className="f7 ttu black-40 fw4 tracked tc">{type}</div>
			</div>
			{image_uri ? <>
				<h1 className="f4 fw4 gray mt2 fw4">{name}</h1>
				<img src={image_uri} className="br-100 h4 w4 dib ba b--black-05 pa2" alt={`${type} - ${name}`}/>
			</> : <>
				<div className="pv5" style={{
					background: SkinType ?
						'center/7rem 7rem no-repeat radial-gradient(#ccc0 20%, #ccc  50%,#ccc 65%, #ccc0 70.7%)' :
						'center/7rem 7rem no-repeat radial-gradient(#ccc0 25%, #ccc  25%,#ccc 70.7%, #ccc0 70.7%)'
				}}>
					<h1 className="f4 ttu fw4 gray mv0 fw4">{name}</h1>
				</div>
			</>}
			<div className="nft-stats center mv3">
				{Object.keys( attributes ).map( ( attr, key ) => {
					const icon = statIcons[attr.toLowerCase()];
					if ( !icon ) {
						return null;
					}
					return <div key={key} className='nft-stat black-80'>
						<div className="w2 tc dib v-mid">
							<img className='h1 w-auto' src={icon} alt={attr}/>
						</div>
						<div className='w2 tc dib v-mid'> {attributes[attr]} </div>
					</div>
				} )}
			</div>
		</div>
	</article>;
}