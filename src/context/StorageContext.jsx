import React, { useContext, useState, useEffect } from 'react';
import { Storage } from '@ionic/storage';

const StorageContext = React.createContext();

export function useStorage() {
	return useContext(StorageContext);
}

export function StorageProvider({ children }) {
	const store = new Storage();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function initStorage() {
			await store.create();

			setIsLoading(false);
		}
		initStorage();
	}, []);

	async function getItem(name) {
		await store.create();
		const data = await store.get(name);
		return data;
	}

	async function setItem(name, data) {
		await store.create();
		await store.set(name, data);
	}

	async function removeItem(name) {
		await store.create();
		await store.remove(name);
	}

	async function clearItems() {
		await store.create();
		await store.clear();
	}

	async function getAllItems() {
		await store.create();
		const data = await store.keys();
		return data;
	}

	const value = {
		getItem,
		setItem,
		removeItem,
		clearItems,
		getAllItems,
	};

	return (
		<StorageContext.Provider value={value}>
			{!isLoading && children}
		</StorageContext.Provider>
	);
}
