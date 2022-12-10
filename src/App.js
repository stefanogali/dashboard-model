import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { SidebarContextProvider } from "./store/sidebar-context";
import Layout from "./components/Layout/Layout";
import Home from './components/pages/Home';

function App() {
	return (
		<SidebarContextProvider>
			<div className="App">
				<Router>
					<Layout>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/tables" element={<h1>Hello I am the tables page</h1>} />
							<Route exact path="/reports" element={<h1>Hello I am the reports page</h1>} />
							<Route exact path="/user-demo" element={<h1>Hello I am the user demo page</h1>} />
							<Route exact path="/bar" element={<h1>Hello I am the bar page</h1>} />
							<Route exact path="/foo" element={<h1>Hello I am the foo page</h1>} />
							<Route exact path="/hello-mate" element={<h1>Hello I am the hello mate page</h1>} />
							<Route exact path="/settings" element={<h1>Hello I am the settings page</h1>} />
							<Route path="*" element={<Navigate to="/" replace />} />
						</Routes>
					</Layout>
				</Router>
			</div>
		</SidebarContextProvider>
	);
}

export default App;
