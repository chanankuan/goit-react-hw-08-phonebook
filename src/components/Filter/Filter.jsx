import { Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Input
      display="block"
      margin="0 auto"
      marginBottom="30px"
      width="300px"
      placeholder="Search"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
