import React from 'react'
import ProductsNav from '../components/ProductsNav/ProductsNav'
import './filter.css'
import Footer from '../components/footer/Footer'

const FilterPage = () => {
    return (
        <>
          <div className='filtercont'>
         
           <ProductsNav/>
            <main>
                <div class="report-section">
                    <select>
                        <option value="">Çarşı Şube</option>
                        <option value="">Kayseri Şube</option>
                        <option value="">Üniversite Şube</option>
                    </select>
                    <select>
                        <option value="">Kasa raporu</option>
                        <option value="">Günsonu Raporu</option>
                        <option value="">Ürün Satış Raporu</option>

                    </select>
                    <div class="date-range-label">Rapor Başlangıç ve Bitiş Tarihi Seçiniz</div>
                    <div class="date-range-inputs">
                        <input type="datetime-local" />
                        <input type="datetime-local" />
                    </div>

                    <button class="report-button">Raporu Oluştur</button>
                </div>
                <div class="report-section">
                    <select>
                        <option value="">Çarşı Şube</option>
                        <option value="">Kayseri Şube</option>
                        <option value="">Üniversite Şube</option>

                    </select>
                    <select>
                        <option value="">Kasa raporu</option>
                        <option value="">Günsonu Raporu</option>
                        <option value="">Ürün Satış Raporu</option>
                    </select>
                    <div class="date-range-label">Rapor Başlangıç ve Bitiş Tarihi Seçiniz</div>
                    <div class="date-range-inputs">
                        <input type="datetime-local"/>
                            <input type="datetime-local"/>
                            </div>

                            <button class="report-button">Raporu Oluştur</button>
                    </div>
                  
            </main>
            </div>
         <Footer/>
         

        </>
    )
}

export default FilterPage






