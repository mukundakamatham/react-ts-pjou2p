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
  const [relationShip, setRelationShip] = React.useState<Array<object>>([]);
  const handleRelation = (e: object) => {
    console.log('clicked');
    setRelationShip([new Set([...relationShip, e])]);
    console.log([new Set([...relationShip, e])]);
  };

  return (
    <div>
      <Relation
        persons={[...persons]}
        relation={[...relation]}
        handlerelation={handleRelation}
      />
    </div>
  );
}
