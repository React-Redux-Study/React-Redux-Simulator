import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Routes/Layout/Footer";
import Header from "./Routes/Layout/Header";

import Register from "./Routes/Register/Register";
import Template from "./Routes/Template/Template";
import Viewer from "./Routes/Template/Viewer";

import ErrorModalComponent from "./Components/Modal/ErrorModalComponent";

const App = () => {
	return (
		<Router>
			<Header />
			<ErrorModalComponent />
			<Routes>
				<Route path="/" element={<Template/>}/>
				<Route path="/:page" element={<Template />} />
				<Route path="/register" element={<Register />} />
				<Route path="/viewer/:id" element={<Viewer />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
