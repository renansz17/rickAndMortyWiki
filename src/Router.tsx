import { Route, Routes } from "react-router-dom";
import { Characters } from "./pages/Characters";
import { Episodes } from "./pages/Episodes";
import { Home } from "./pages/Home";
import { Locals } from "./pages/Locals";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locals" element={<Locals />} />
            <Route path="/episodes" element={<Episodes />} />
        </Routes>
    )
};