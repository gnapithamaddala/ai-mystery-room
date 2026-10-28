import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

describe('landing page',()=>{
  it('introduces the investigation and links to the playable demo',()=>{
    render(<MemoryRouter><App/></MemoryRouter>);
    expect(screen.getByText(/Every clue/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore the demo/i)).toBeInTheDocument();
    expect(screen.getByText(/The Last Light/i)).toBeInTheDocument();
  });
});
