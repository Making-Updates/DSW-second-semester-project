import React, { useContext, useState, useEffect } from 'react';
import { Network } from '@capacitor/network';

const NetworkContext = React.createContext();

export function useNetwork() {
	return useContext(NetworkContext);
}

export function NetworkProvider({ children }) {
	const [networkStatus, setNetworkStatus] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getNetworkStatus() {
			const status = await Network.getStatus();
			setNetworkStatus(status.connected);
			setIsLoading(false);
		}

		getNetworkStatus();
	}, []);

	Network.addListener('networkStatusChange', (status) => {
		setNetworkStatus(status.connected);
	});

	const value = {
		networkStatus,
	};

	return (
		<NetworkContext.Provider value={value}>
			{!isLoading && children}
		</NetworkContext.Provider>
	);
}
