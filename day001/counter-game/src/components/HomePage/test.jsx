import { render, screen, fireEvent } from '@testing-library/react';
import {expect, it, jest} from '@jest/globals';
import HomePage from '../HomePage/HomePage.js';

const mockData = [{ value: 1 }, { value: 2 }, { value: 3 }];
const mockOnAction = jest.fn();

it('renders computed data correctly', () => {
  render(<HomePage data={mockData} onAction={mockOnAction} />);
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
  expect(screen.getByText('6')).toBeInTheDocument();
});

it('calls onAction with computed data when button is clicked', () => {
  render(<HomePage data={mockData} onAction={mockOnAction} />);
  fireEvent.click(screen.getByText('Perform Action'));
  expect(mockOnAction).toHaveBeenCalledWith([2, 4, 6]);
});

it('renders empty state correctly', () => {
  render(<HomePage data={[]} onAction={mockOnAction} />);
  expect(screen.queryByText('Perform Action')).toBeInTheDocument();
  expect(screen.queryByText('2')).not.toBeInTheDocument();
  expect(screen.queryByText('4')).not.toBeInTheDocument();
  expect(screen.queryByText('6')).not.toBeInTheDocument();
});