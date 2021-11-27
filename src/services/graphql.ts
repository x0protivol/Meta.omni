import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import { cmsURL } from 'config';

const link = new HttpLink({ uri: `${cmsURL}/graphql`, useGETForQueries: true });

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore',
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
	},
});

export const clientWithCache = new ApolloClient({
	cache: new InMemoryCache(),
	link,
});
