function AwardsToolbar({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  resultCount,
}) {
  return (
    <section
      className="awards-toolbar-section"
      id="awards-catalogue"
      aria-label="Award Filters and Search"
    >
      <div className="awards-container">
        <div className="awards-toolbar">
          <div className="awards-filter-pills" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-pill ${activeCategory === category ? "is-active" : ""}`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="awards-search-wrapper">
            <input
              type="text"
              placeholder="Search awards, year, topic..."
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              className="awards-search-input"
              aria-label="Search awards by title or keyword"
            />
            <span className="awards-count-label">
              {resultCount} {resultCount === 1 ? "Award" : "Awards"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsToolbar;
