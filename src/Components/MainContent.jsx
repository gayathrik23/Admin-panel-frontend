import { Route, Routes } from "react-router-dom"
import Products from "../pages/Products"
import Customers from "../pages/Customers"
import Category from "../pages/Category"
import Reports from "../pages/Reports"
import Setting from "../pages/Setting"
import DashBoard from "../pages/DashBoard"



const MainContent = () => {
    return (
        <div className=" w-full h-full bg-[#282d55]">
            <Routes>
                <Route path={'/'} element={<DashBoard />} />
                <Route path={'/products'} element={<Products />} />
                <Route path={'/customers'} element={<Customers />} />
                <Route path={'/category'} element={<Category />} />
                <Route path={'/reports'} element={<Reports />} />
                <Route path={'/setting'} element={<Setting />} />
            </Routes>
        </div>

    )
}

export default MainContent
