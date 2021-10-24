import React, { useContext, useState, useEffect } from 'react';
import { supabase } from '../supabase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const session = supabase.auth.session();
		setUser(session?.user.email ?? null);
		setLoading(false);

		const { data: listener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setUser(session?.user.email ?? null);
				setLoading(false);
			}
		);

		return () => {
			listener?.unsubscribe();
		};
	}, []);

	const value = {
		user,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
