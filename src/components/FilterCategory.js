function FilterCategory({ onCategoryChange }) {
  return (
    <div className="filter-container">
      <button value="All" onClick={(e) => onCategoryChange(e.target.value)}>
        ALL
      </button>
      <button
        type="submit"
        value="dessert"
        onClick={(e) => onCategoryChange(e.target.value)}
      >
        DESSERT
      </button>
      <button
        type="submit"
        value="dairy"
        onClick={(e) => onCategoryChange(e.target.value)}
      >
        DAIRY
      </button>
      <button
        type="submit"
        value="meat"
        onClick={(e) => onCategoryChange(e.target.value)}
      >
        MEAT
      </button>
      <button
        type="submit"
        value="misc"
        onClick={(e) => onCategoryChange(e.target.value)}
      >
        MISC
      </button>
      <button
        type="submit"
        value="produce"
        onClick={(e) => onCategoryChange(e.target.value)}
      >
        PRODUCE
      </button>
      <button
        type="submit"
        value="snacks"
        onClick={(e) => onCategoryChange(e.target.value)}
      >
        SNACKS
      </button>
    </div>
  );
}

export default FilterCategory;
