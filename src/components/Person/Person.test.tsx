import { render, screen } from '@testing-library/react';

import { PersonType } from '../../types';
import Person from './Person'

describe('<Person />', () => {
  test('should render the person\'s name', () => {
    const person: PersonType = { name: 'Jek Tono Porkins', starships:[],vehicles:[],birth_year:"", gender:"",mass:0,age:0,eye_color:"",films:[],hair_color:"",height:0,skin_color:"",species:[]}

    render(<Person person={person} />)

    screen.getByText(person.name)
  })
});
