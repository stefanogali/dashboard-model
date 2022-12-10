import React, {useState} from 'react';

const SidebarContext = React.createContext({
	isSidebarOpened: false,
	onSidebarOpen: () => {},
	onSidebarClose: () => {}
});

export const SidebarContextProvider = (props) => {
	const [isSidebarOpened, setIsSidebarOpened] = useState(false);

	const openSidebarHandler = () => {
		setIsSidebarOpened(true);
	}
	const closeSidebarHandler = () => {
		setIsSidebarOpened(false);
	}

	return (
		<SidebarContext.Provider
			value={{
				isSidebarOpened: isSidebarOpened,
				onSidebarOpen: openSidebarHandler,
				onSidebarClose: closeSidebarHandler
			}}>
			{props.children}
		</SidebarContext.Provider>
	)
}

export default SidebarContext;
