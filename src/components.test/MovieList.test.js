import React  from 'react';
import { render } from '@testing-library/react';
import MovieList from '../components/MovieList';
import  AppContext  from '../AppContext'

test('renders Loading...', () => {
  const { getByText } = render(<MovieList loading={true} />);  
  expect(getByText(/Loading.../i)).toBeInTheDocument();
});


const test_movies_list=[
  {id:'1234',title:'Test movie title'}
]


test('renders sample item (Test movie title)', () => {
  const { getByText } = render(<MovieList list={test_movies_list} />);  
  expect(getByText(/Test movie title/i)).toBeInTheDocument();
});


const mock_context={
  favorites_list:{
    '1234':{}
  }
}

test('render fill-star-icon text', () => {
  const { getByRole } = render(
    <AppContext.Provider value={mock_context}>
     <MovieList list={test_movies_list} />
    </AppContext.Provider>
    
  );  
  expect(getByRole('fav-icon').classList.contains("fill-star-icon")).toBe(true)
});
