import './index.css'

const TabItem = props => {
  const {tabDetails, tab, onClickTab} = props
  const {displayText, tabId} = tabDetails

  const onClickSelectTab = () => {
    onClickTab(tabId)
  }

  const selectTab = tabId === tab ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={onClickSelectTab}
        className={`tab-btn ${selectTab}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
