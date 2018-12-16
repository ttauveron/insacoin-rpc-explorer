module.exports = {
	
	// Edit "rpc" below to target your node.
	// You may delete this section if you wish to connect manually via the UI.

	rpc: {
		host:"${rpchost}",
		port:7332,
		username:"${username}",
		password:"${password}"
	},

	// optional: enter your api access key from ipstack.com below
	// to include a map of the estimated locations of your node's
	// peers
	ipStackComApiAccessKey:"${ipstack_api_key}",

	// optional: GA tracking code
	googleAnalyticsTrackingId:"", // LOL

	// optional: sentry.io error-tracking url
	sentryUrl:"",
};
