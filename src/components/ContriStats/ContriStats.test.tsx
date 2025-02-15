import React from 'react';
import { render, screen } from '@testing-library/react';
import ContriStats from './ContriStats';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_BACKEND_ENDPOINT,
});

describe('Testing Contribution Stats', () => {
  const props = {
    key: '123',
    id: '234',
    recentAmount: '200',
    highestAmount: '500',
    totalAmount: '1000',
  };

  test('should render props and text elements test for the page component', () => {
    render(
      <ApolloProvider client={client}>
        <ContriStats {...props} />
      </ApolloProvider>
    );
    expect(screen.getByText('Recent Contribution: $')).toBeInTheDocument();
    expect(screen.getByText('Highest Contribution: $')).toBeInTheDocument();
    expect(screen.getByText('Total Contribution: $')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
  });
});
