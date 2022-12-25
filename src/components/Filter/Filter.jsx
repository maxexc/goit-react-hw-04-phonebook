import PropTypes from 'prop-types';
import {
  FilterTitle, 
  Filterinput, 
} from './Filter.styled';

const Filter = ({value, onFilter}) => {
    return (       
        <label>
            <FilterTitle>Filter</FilterTitle>  
            <Filterinput
                type="text"
                name="filter"
                value={value}
                onChange={onFilter}
                placeholder="Enter request"
            ></Filterinput>
        </label>     
    )    
 }

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
}
