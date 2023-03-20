import classnames from 'classnames';
import Select, { SingleValue } from 'react-select';
import { SelectOption } from '../../types/SelectOption';

interface SearchProps {
  options: Array<SelectOption>;
  handleChange: (option: SingleValue<SelectOption>) => void
}
const Search = ({
  options,
  handleChange,
}: SearchProps) => {
  return (

    <Select options={options}  
      onChange={(aa : SingleValue<SelectOption>) => handleChange(aa)}
          
      className='w-40 m-auto border-none mb-5'
      classNames={{
        input: ()  => (
          classnames({
            'text-base-content': true,
          })
        ),  
        menuList: ()  => (
          classnames({
            'text-base-content': true,
            'bg-base-100': true,
          })
        ),
        control: () => (
          classnames({
            'border-none': true,
            'text-base-content': true,
            'bg-base-100': true,
          })
        ),
        singleValue: () => ('text-base-content'),
        option: (state) => (
          classnames({
            'text-base-content': true,
            'bg-base-100': !state.isFocused,
            'bg-base-300': state.isFocused,
          })
        ),
        
      }} />

  );
};

export default Search;
