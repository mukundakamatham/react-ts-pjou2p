import * as React from 'react';
import Relation from './Components/Relationship';
import './style.css';

export default function App() {
  const [persons, setPersons] = React.useState<Array<string>>([
    'mukesh',
    'santhosh',
    'sathish',
    'geetha',
    'kishore',
    'adhitya',
  ]);
  const [relation, setRelation] = React.useState<Array<string>>(['Friend']);
  return (
    <div>
      <Relation persons={[...persons]} relation={[...relation]} />
    </div>
  );
}
