import React  from 'react';
import { render } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails';
import  AppContext  from '../AppContext'


const test_movie_items=[
  {id:'1',title:'Test movie title1'},
  {id:'2',title:'Test movie title2'}
];
const mock_context={
  favorites_list:{'2':{}},
  watch_list:{'1':{}}
}

test('renders test movie item ', () => {
  const { getByText } = render( <AppContext.Provider value={mock_context}>
    <MovieDetails movieItem={test_movie_items[0]} />
   </AppContext.Provider>);  
  expect(getByText(/Test movie title1/i)).toBeInTheDocument();
});


// faviorates button

test('render Add to faviorates button', () => {
  const { getByText } = render(
    <AppContext.Provider value={mock_context}>
     <MovieDetails movieItem={test_movie_items[0]} />
    </AppContext.Provider>    
  );  
  expect(getByText(/Add to faviorates/i)).toBeInTheDocument()
});

test('render Remove from favorites button', () => {
  const { getByText } = render(
    <AppContext.Provider value={mock_context}>
     <MovieDetails movieItem={test_movie_items[1]} />
    </AppContext.Provider>    
  );  
  expect(getByText(/Remove from favorites/i)).toBeInTheDocument()
});


//watch list button


test('render Add to watch list button', () => {
  const { getByText } = render(
    <AppContext.Provider value={mock_context}>
     <MovieDetails movieItem={test_movie_items[1]} />
    </AppContext.Provider>    
  );  
  expect(getByText(/Add to watch list/i)).toBeInTheDocument()
});

test('render Remove from watch list button', () => {
  const { getByText } = render(
    <AppContext.Provider value={mock_context}>
     <MovieDetails movieItem={test_movie_items[0]} />
    </AppContext.Provider>    
  );  
  expect(getByText(/Remove from watch list/i)).toBeInTheDocument()
});
