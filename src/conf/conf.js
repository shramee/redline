import youtube from '../assets/youtube-brands.svg';
import twitter from '../assets/twitter.svg';
import discord from '../assets/discord.svg';
import _abi_raceContract from './abi_raceContract.json';

export const
	twitchURL                 = 'https://player.twitch.tv/?channel=redlinedao&parent=' + window.location.host.split( ':' )[0],
	rewardsLinks              = [
		[<img height='25' alt='Twitter' src={twitter}/>, 'https://twitter.com/PlayRedline'],
		[<img height='25' alt='Discord channel' src={discord}/>, 'https://discord.gg/UKmSwPrKjw'],
		[<img height='25' alt='Youtube' src='https://crew3.xyz/static/media/Crew3_150x47.5.40902c36d4459e858b9b31d1deee26e0.svg'/>, 'https://redline.crew3.xyz/'],
	],
	sponsorLinks              = [
		['isotropic', '#'],
	],
	raceTrackImageURI              = 'https://redline.game/a/t00.webp';

export const
	defaultSpacesInRace = 6;

// Contract addresses
export const
	robotsNFTsContractAddress = '0x000658fd29c4d5b5bc56e948a206bd40f8bfa4aa4acfe17ebebfac035dadf34d',
	raceContractAddress       = '0x078d1fd91e71d15dc05ff65de1afc4733993e0c7c88d17e00768383e3151f76f';

export const abi_raceContract = _abi_raceContract;