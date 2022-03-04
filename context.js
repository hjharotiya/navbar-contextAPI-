import React, { useState, useContext } from 'react'
import Sidebar from './Sidebar';

const Appcontext = React.createContext();
const AppProvider = ({ children }) => {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	}
	const openModal = () => {
		setIsModalOpen(true);
	}
	const closeModal = () => {
		setIsModalOpen(false);
	}

	return <Appcontext.Provider value=
		{{isModalOpen,isSidebarOpen,openModal,closeModal,openSidebar,closeSidebar }}>
		{children}
	</Appcontext.Provider>
}

export const useGlobalContext = () => {
	return useContext(Appcontext);
}

export { Appcontext, AppProvider };