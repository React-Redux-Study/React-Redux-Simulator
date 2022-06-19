import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Routes/Layout/Footer";
import Header from "./Routes/Layout/Header";

import Register from "./Routes/Register/Register";
import Template from "./Routes/Template/Template";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Template/>}/>
				<Route path="/register" element={<Register />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
