import { render } from '@testing-library/react';
import { ForceGraph } from '../ForceGraph';

describe('ForceGraph', () => {
  it('renders without crashing', () => {
    expect(() =>
      render(<ForceGraph data={{ nodes: [], links: [] }} />)
    ).not.toThrow();
  });
});
