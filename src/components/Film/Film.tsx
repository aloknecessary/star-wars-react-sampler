import { Card, Descriptions,Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { fetchFilm } from '../../api';
import { FilmType } from '../../types';

interface FilmProps {
  filmUrl: string
}

function Film({ filmUrl }: FilmProps) {
  const [film, setFilm] = useState<FilmType| undefined>(undefined);

  useEffect(() => {
    fetchFilm(filmUrl)
      .then((filmResponse:FilmType) => {
        setFilm(filmResponse);
      });
  }, [filmUrl]);
  
  if(!filmUrl || !film){
    return <Skeleton />
  }

  return (
    <Card style={{paddingBottom:"10px", marginBottom:"10px"}}>
      <Descriptions title={film.title}>
        <Descriptions.Item label="Director">{film.director}</Descriptions.Item>
        <Descriptions.Item label="Producer">{film.producer}</Descriptions.Item>
        <Descriptions.Item label="Release Date">{film.release_date}</Descriptions.Item>
      </Descriptions>
      <p>{film.opening_crawl}</p>
    </Card>
  )
}

export default Film;
