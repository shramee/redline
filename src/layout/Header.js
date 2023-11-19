import WalletConnect from '../components/WalletConnect';
import { Consumer } from "../app/AppContext";
import { Link, NavLink } from "react-router-dom";
import { appStateHOC } from "../components/appStateHOC";

const navBarItems = [
	["/race", "Races"],
	["/inventory", "Inventory"],
	["/workshop", "Workshop"],
];

function pathNameActive(path, activeReturn = true, inactiveReturn = null) {
	if (window.location.pathname === path) {
		return activeReturn;
	}
	return inactiveReturn;
}

const Header = ({ setContext }) => {
	const navBtn = 'white link w4 ba pa2 mh2';
	return <>
		<Link className="link w-25" to="/" title="Home">
			<h1 className="montserrat900 ls-2 white f2 ma0 v-mid ttu ">
				REDLINE
			</h1>
		</Link>
		<nav className="flex items-center justify-center w-75 ml-auto tc pl4">
			{navBarItems.map(
				([path, label], i) =>
					<NavLink key={i} className={`${navBtn}`} to={path}>
						{label}</NavLink>
			)}
			<div className="ml-auto">
				<WalletConnect autoConnect={true} onConnectedStatusChange={(isConnected, wallet) => setContext({ wallet })} />
			</div>
		</nav>
	</>;
}

export default appStateHOC(Header);