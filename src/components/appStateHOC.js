import AppContext from "../app/AppContext";

export function appStateHOC( WrappedComponent ) {
	return ( props ) =>
		<AppContext.Consumer>
			{( state ) => {
				return <WrappedComponent {...props} {...state} />
			}}
		</AppContext.Consumer>
}