import { useDispatch, useSelector } from 'react-redux';
import {getFilter} from 'redux/filterSlice'
import { Label, Input } from './Filter.styled';
import { selectorFilter } from 'redux/selectors';


function Filter () {
  
  const filter = useSelector(selectorFilter)
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

