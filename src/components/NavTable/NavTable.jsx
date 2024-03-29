// NavTable.jsx
import React from 'react';
import classNames from 'classnames';
import { products,activeAdisyonData } from '../../data/data';
import './style.css'

const NavTable = ({ data, selectedRow, setSelectedRow, isOpen, isOpenPrice, selectedData, activeAdisyon, slectedADRow, slectedProductRow, isDarkMode }) => {
  return (
    <>
      <div className={` navtablecontainer    transition-[30s]  ${isOpen && 'hidden transition-[10s] '} ${ isDarkMode ?  'bg-[#293B46]' : 'bg-white'}   `}>
        <h1 className='     Poppins '>{(isOpenPrice && 'PRODUCTS') ||( activeAdisyon && 'ACIK ADISIYONLAR') || ('REPORTS')}</h1>
        {
          (isOpenPrice && products.map((row,index) => (
            <div    key={index} className={classNames('   pricecontainer    ', {
              'bg-[#E2E8F0]': slectedProductRow === row.id,

            })}>
              <div
             
                className=' pricewrapper   '>
                <div  dangerouslySetInnerHTML={{ __html: row.logo }}></div>

                <p className=" Poppins ">{row.name}</p>
              </div>
            </div>
          )))||

        (  activeAdisyon &&
          activeAdisyonData.map((row,index) => (
            <div   key={index} className={classNames('  activAdcontainer  ', {
              'bg-[#E2E8F0] ': slectedADRow === row.id,

            })}>
              <div
        
                className=' activeAdwrapper   '



              >
                <div  dangerouslySetInnerHTML={{ __html: row.logo }}></div>

                <p className="  Poppins ">{row.name}</p>
              </div>
            </div>
          )))||
         ( selectedData && data.map((row,index) => (
            <div   key={index} className={classNames('   slecteddatacont  ', {
              'bg-[#E2E8F0] ': selectedRow === row.id,

            })}>
              <div
                key={index}
                className=' slecteddatawrapper   '


                onClick={() => setSelectedRow(row.id)}
              >
                <div className=' ' dangerouslySetInnerHTML={{ __html: row.logo }}></div>

                <p className=" Poppins ">{row.Name}</p>
              </div>
            </div>
          )))
        }
      </div>



    </>
  );
};

export default NavTable;