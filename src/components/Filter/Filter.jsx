import { useDispatch, useSelector } from 'react-redux';
import {getFilter} from 'redux/filterSlice'
import { Label, Input } from './Filter.styled';


function Filter () {
  
  const filter = useSelector(state => state.contacts.filter)
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(getFilter(e.currentTarget.value))
  }
  return(
    <Label >
      Filter
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </Label>
  )
};


export default Filter;

