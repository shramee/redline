export function itemsByKey( items, typeKey, itemsByTypes = {} ) {
	items.forEach( item => {
		const itemType = typeKey.split( '.' ).reduce( ( value, key ) => value[key], item );
		if ( !itemsByTypes[itemType] ) {
			itemsByTypes[itemType] = [];
		}
		itemsByTypes[itemType].push( part )
	} );
	return itemsByTypes;
}

export function partsByType( partNFTS, itemsByTypes = {} ) {
	return itemsByKey( partNFTS, 'attributes.PartType', itemsByTypes );
}

export function skinsByType() {
	return itemsByKey( skinNFTS, 'attributes.SkinType', itemsByTypes );
}