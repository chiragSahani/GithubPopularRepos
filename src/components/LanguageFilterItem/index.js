import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, updateActiveLanguageFilterId, isActive} = props
  const {id, language} = languageFilterDetails

  const onClickLanguageFilter = () => {
    updateActiveLanguageFilterId(id)
  }

  const activeFilterClassName = isActive ? 'active-language-filter' : ''

  return (
    <li className="language-filter-item">
      <button
        type="button"
        className={`language-filter-button ${activeFilterClassName}`}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
