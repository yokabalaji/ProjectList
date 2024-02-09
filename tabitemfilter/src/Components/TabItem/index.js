import './index.css'


const TabItem= props => {
    const {tabList,isActive,clickTabItem}=props
    const {tabId,disText}=tabList
    const onClickBtnAction=()=>{
        clickTabItem(tabId)
    }

    const isActives=isActive?'changed':''
    return(
        <div>
            <button   className={`btn tab ${isActives}`}   onClick={onClickBtnAction}>
               {disText}
            </button>
        </div>
    )
}
export default TabItem