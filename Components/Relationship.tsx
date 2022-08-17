import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Relationship({ persons, relation, handlerelation }) {
  console.log(persons);
  const [firstPerson, setFirstPerson] = React.useState('');
  const [secondPerson, setSecondperson] = React.useState('');
  const [relationShip, setRelationShip] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChange = (event: SelectChangeEvent, type: any) => {
    if (type === 'first') {
      setFirstPerson(event.target.value as string);
    } else if (type === 'second') {
      setSecondperson(event.target.value as string);
    } else {
      setRelationShip(event.target.value as string);
    }
  };
  const handleAdd = () => {
    console.log('came to check');
    if (firstPerson.length < 1) {
      console.log('came to check1');

      setError('select first person');
    } else if (secondPerson.length < 1) {
      console.log('came to checkk');

      setError('select second person');
    } else if (relationShip.length < 1) {
      console.log('came to checkkk');

      setError('select relation');
    } else {
      console.log('came to checking');

      handlerelation({
        firstPerson: firstPerson,
        secondPerson: secondPerson,
        relationShip: relationShip,
      });
    }
  };
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            select first person
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={firstPerson}
            label="select first person "
            onChange={(e) => handleChange(e, 'first')}
          >
            {persons.map((e: any) => (
              <MenuItem value={e}>{e}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            select second person
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={secondPerson}
            label="select second person "
            onChange={(e) => handleChange(e, 'second')}
          >
            {persons?.map((e: any) => (
              <MenuItem value={e}>{e}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            select person relation
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={relationShip}
            label="relation "
            onChange={(e) => handleChange(e, 'relation')}
          >
            {relation?.map((e: any) => (
              <MenuItem value={e}>{e}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="outlined"
        onClick={() => {
          console.log('clicked');
          // handleAdd();
        }}
      >
        Add Relationship
      </Button>
    </div>
  );
}
