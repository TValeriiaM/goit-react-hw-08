import css from './SearchBox.module.css'
import { useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice'
import { useSelector } from 'react-redux';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value.trim()));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={handleSearch}
        id = "searchBox"
      />
    </div>
  );
}