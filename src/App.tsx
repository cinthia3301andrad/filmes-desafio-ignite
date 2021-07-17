import { useState } from 'react';

import { GenreResponseProps, MovieProps } from './types';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';



export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     
      <SideBar onMovies={setMovies} onSelectedGenre={setSelectedGenre}/>
      <Content movies={movies} selectedGenre={selectedGenre}/>
    </div>
  )
}