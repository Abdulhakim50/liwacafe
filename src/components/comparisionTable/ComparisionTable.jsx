import React from 'react'
import ComparisionData from './ComparisionData'

const ComparisionTable = ({showTable,isDarkMode,selectedData,selectedMenu,selectedMenuData,isTabelSelected, selectedDate, activeAdisyon,isOpenPrice}) => {
  return (
    <>
    <div className={`${!selectedMenu && 'hidden'}`}>
     <ComparisionData activeAdisyon={activeAdisyon} isOpenPrice={isOpenPrice} showTable={showTable} isDarkMode={isDarkMode} selectedMenu={selectedMenu} selectedData={selectedData} selectedMenuData={selectedMenuData} isTabelSelected={isTabelSelected} selectedDate={selectedDate} />
    </div>
    </>
  )
}

export default ComparisionTable