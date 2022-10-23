import {twitchURL, rewardsLinks, sponsorLinks} from "../../conf";
import GameUI from './GameUI';
import {appStateHOC} from "../../components/appStateHOC";

const Home = ( props ) => {
	const {wallet} = props;
	const {isConnected} = wallet || {};

	return <article className="">
		<div className="center">
			<div className="cf">
				<div className="fl w-100 w-70-ns pr3 white">
					<div className='pa1 b--white-10 ba mb4'>
						<div className="aspect-ratio aspect-ratio--16x9">
							{/*<iframe className="aspect-ratio--object cover" frameBorder="0" allowFullScreen scrolling="no"*/}
							{/*				title="Twitch live race stream" height="450" width="800" src={twitchURL}/>*/}
						</div>
					</div>
					<section className="links dt">
						<nav className="f6 fw6 tracked dt-row">
							<h4 className='dtc ttu v-mid'>Rewards links:</h4>
							<div className='dtc pa3'>
								{
									rewardsLinks.map(
										( [text, url], i ) =>
											<a key={i} className="link dim white dib ml4" href={url}>{text}</a>
									)
								}
							</div>
						</nav>
						<nav className="f6 fw6 tracked dt-row">
							<h4 className='dtc ttu'>Sponsors:</h4>
							<div className='dtc pa3'>
								{
									sponsorLinks.map(
										( [text, url], i ) =>
											<a key={i} className="link f4 dim white dib ml4" href={url}>{text}</a>
									)
								}
							</div>
						</nav>
					</section>
					<section className="notice pv3 f6">
						Early Access game, not representative of the final experience
					</section>
				</div>
				<div className="fl w-100 w-30-ns">
					{isConnected ?
						<GameUI {...props} /> :
						<div className='tr o-70'>
							<svg xmlns="http://www.w3.org/2000/svg" className='h3 mr2' viewBox="0 0 320 512">
								<path fill='currentcolor'
											d="M310.6 182.6c-12.51 12.51-32.76 12.49-45.25 0L192 109.3V480c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3L54.63 182.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128C323.1 149.9 323.1 170.1 310.6 182.6z"/>
							</svg>
							<h3 className='fw2 f2 mt2'>Connect your wallet to continue.</h3>
						</div>
					}
				</div>
			</div>
		</div>
	</article>;
}

export default appStateHOC( Home, {fetchNFTs: true} );
