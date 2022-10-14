import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

{/* <Route path="/" element={<DefaultLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/history" element={<History />} />
</Route> */}