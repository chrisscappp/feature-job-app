import { Outlet } from "react-router-dom"
import { Suspense } from "react"

const CommonLayout = () => {
    return (
        <>
            <Suspense fallback = {<h3>Loading...</h3>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default CommonLayout