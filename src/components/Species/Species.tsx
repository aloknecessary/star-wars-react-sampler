import { Card, Descriptions,Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { fetchSpecies } from '../../api';
import { SpeciesType } from '../../types';

interface SpeciesProps {
  speciesUrl: string
}

function Species({ speciesUrl }: SpeciesProps) {
  const [species, setSpecies] = useState<SpeciesType| undefined>(undefined);

  useEffect(() => {
    fetchSpecies(speciesUrl)
      .then((filmResponse:SpeciesType) => {
        setSpecies(filmResponse);
      });
  }, [speciesUrl]);
  
  if(!speciesUrl || !species){
    return <Skeleton />
  }

  return (
    <Card style={{paddingBottom:"10px", marginBottom:"10px"}}>
      <Descriptions title={species.name}>
        <Descriptions.Item label="Avg Height">{species.average_height}</Descriptions.Item>
        <Descriptions.Item label="Life Span">{species.average_lifespan}</Descriptions.Item>
        <Descriptions.Item label="Classification">{species.classification}</Descriptions.Item>
        <Descriptions.Item label="Designation">{species.designation}</Descriptions.Item>
        <Descriptions.Item label="Eye Color">{species.eye_colors}</Descriptions.Item>
        <Descriptions.Item label="Hair Color">{species.hair_colors}</Descriptions.Item>
        <Descriptions.Item label="Skin Color">{species.skin_colors}</Descriptions.Item>
        <Descriptions.Item label="Language">{species.language}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default Species;
