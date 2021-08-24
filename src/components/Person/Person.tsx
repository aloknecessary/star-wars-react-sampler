import { Descriptions,Skeleton } from 'antd';
import { PersonType } from '../../types';
import Film from '../Film';
import Species from '../Species';

interface PersonProps {
  person: PersonType | undefined
}

function Person({ person }: PersonProps) {
  if(!person){
    return <Skeleton />
  }
  return (
    <div>
      <Descriptions title={person.name + " Info"}>
      <Descriptions.Item label="Height">{person.height}</Descriptions.Item>
      <Descriptions.Item label="Weight">{person.mass}</Descriptions.Item>
      <Descriptions.Item label="Eye Color">{person.eye_color}</Descriptions.Item>
      <Descriptions.Item label="Hair Color">{person.hair_color}</Descriptions.Item>
      <Descriptions.Item label="Skin Color">{person.skin_color}</Descriptions.Item>
      <Descriptions.Item label="Gender">{person.gender}</Descriptions.Item>
      <Descriptions.Item label="Birth Year">{person.birth_year}</Descriptions.Item>
      <Descriptions.Item label="Vehicles">{person.vehicles.length}</Descriptions.Item>
      <Descriptions.Item label="Starships">{person.starships.length}</Descriptions.Item>
    </Descriptions>
    <br />
    <h4>Films</h4>
      {person.films && person.films.map(film => <Film filmUrl={film} />)}
    <br />
    <h4>Species</h4>
      {person.species && person.species.map(s => <Species speciesUrl={s} />)}
      {person.species.length === 0 && <p>No species found</p>}
    </div>
  )
}

export default Person
