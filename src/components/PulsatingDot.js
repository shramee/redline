export default function PulsatingDot( {className} ) {
	className = className || '';
	className += " ring-container";
	return <div className={className}>
		<div className="ringring"></div>
		<div className="ring-circle"></div>
	</div>;
}