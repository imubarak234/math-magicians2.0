import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Navigation from '../components/Navigation';
import Quotes from '../components/Quotes';

describe('Series of testing, rendering the various components', () => {
  it('renders Footer correctly', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Home correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Navigation correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter to="/" className="navbar-brand">
          <Navigation />
        </MemoryRouter>,

      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Calculator correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Quotes correctly', () => {
    const tree = renderer
      .create(<Quotes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Series of tests for checking user inputs', () => {
  test('input display', () => {
    render(<Calculator />);

    expect(screen.getByTestId('input').value).toContain('');
  });

  test('Test button input 8', () => {
    render(<Calculator />);

    const kick = screen.getByTestId('8');
    fireEvent.click(kick);

    expect(screen.getByTestId('input').value).toContain('8');
  });

  test('Test button input +', () => {
    render(<Calculator />);

    const kick = screen.getByTestId('+');
    fireEvent.click(kick);

    expect(screen.getByTestId('input').value).toContain('+');
  });

  test('Test button input 8', () => {
    render(<Calculator />);

    const kick = screen.getByTestId('8');
    fireEvent.click(kick);
    fireEvent.click(kick);

    expect(screen.getByTestId('input').value).toContain('88');
  });

  test('Test button input -', () => {
    render(<Calculator />);

    const kick = screen.getByTestId('-');
    fireEvent.click(kick);

    expect(screen.getByTestId('input').value).toContain('-');
  });
});
