import styles from "./SearchField.module.css";

const SearchField = ({ onSearch, search }) => {
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        value={search}
        type="text"
        onInput={onSearch}
      />
    </div>
  );
};

export default SearchField;
