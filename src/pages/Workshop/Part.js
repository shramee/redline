const stats = {
	'MaxSpeed': '',
	'Acceleration': '',

	'Adherence': '',
	'HoofSize': '',
	'Braking': '',

	'Balance': '',
	'Driving': '',
	'Cooling': '',
	'HeatProduction': '',

	'EnergyProduction': '',
	'EnergyStorage': '',
	'EnergyConsumption': '',

	'Load': '',
	'Unbalance': '',
	'MaxHealth': '',

	'EnergyType': '',
	'EngineStart': '',

	'MaxSpeedRange': '',
	'AccelerationRange': '',
	'BrakingRange': '',

	'Brand': '',
	'Sponsor': '',
	'PartName': '',
	'Price': '',
}

export default function Part( part ) {
	return <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
		<div className="tc">
			<img src="https://picsum.photos/seed/part/300" alt='Part image' className="br-100 h4 w4 dib ba b--black-05 pa2"
					 title="Photo of a kitty staring at you"/>
			<h1 className="f3 mb2">Mimi W.</h1>
			<h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
		</div>
	</article>;
}