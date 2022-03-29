import { useState, useEffect } from 'react';
import { TerminalContextProvider } from "react-terminal";
import TitleBar from './TitleBar';
import ExplorerBar from './ExplorerBar';
import Explorer from './Explorer';
import TabsBar from './TabsBar';
<<<<<<< HEAD
import Resizer from './Resizer';
=======
import Terminal from './Terminal';
>>>>>>> main
import BottomBar from './BottomBar';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children, pageProps }) {
<<<<<<< HEAD
=======
	
	const progressBarElements = getProgressBarElements();

>>>>>>> main
	const [explorerStatus, toggleExplorer] = useState(true);
	const [terminalStatus, toggleTerminal] = useState(true);

	useEffect(() => {
		if (window.innerWidth <= 800) {
			toggleExplorer(!explorerStatus)
			toggleTerminal(!terminalStatus)
		}
	}, []);

	return (
		<TerminalContextProvider>
			<TitleBar
				file={pageProps.file}
				terminalStatus={terminalStatus}
				toggleTerminal={toggleTerminal}
			/>
			<div id={styles.container}>
				<ExplorerBar
					explorerStatus={explorerStatus}
					toggleExplorer={toggleExplorer}
				/>
				<Explorer
					explorerStatus={explorerStatus}
				/>
				<div>
					<TabsBar />
<<<<<<< HEAD
					<div className={styles.mainContainer}>
						<main className={styles.content}
							style={terminalStatus ? { height: '70%' } : { height: '100%' }}
						>
							{children}
						</main>
						<Resizer
							terminalStatus={terminalStatus}
							toggleTerminal={toggleTerminal}
						/>
					</div>
=======
					<main className={styles.content} >{children}</main>
					<Terminal
						terminalStatus={terminalStatus}
						progressBarElements={progressBarElements}
					/>
>>>>>>> main
				</div>
			</div>
			<BottomBar
				language={pageProps.language}
			/>
		</TerminalContextProvider>
	);
};