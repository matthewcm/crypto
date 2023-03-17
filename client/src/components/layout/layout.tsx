import { PropsWithChildren } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
