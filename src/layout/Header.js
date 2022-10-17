import WalletConnect from '../components/WalletConnect';
import {Consumer} from "../app/AppContext";
import {Link} from "react-router-dom";

const Header = () => {
	return <Consumer>
		{( {setContext}) => {
			return <>
				<Link className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
					<h1 className="montserrat900 white f3 ma0 v-mid ttu">
						<img src="https://redline.game/media/logo.png" alt="Logo" style={{height:28, width: 'auto'}}/>
					</h1>
				</Link>
				<nav className="dtc v-mid w-75 tr">
					<WalletConnect autoConnect={true} onConnectedStatusChange={( isConnected, wallet ) => setContext( {wallet} )}/>
				</nav>
			</>;
		}}
	</Consumer>;
}

export default Header;