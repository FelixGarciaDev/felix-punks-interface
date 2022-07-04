import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector'

const connector = new InjectedConnector({ supportedChainIds: [4] }) // id 4 is rinkeby


const getLibrary = (provider) => {
    return new Web3(provider);
}

export { connector, getLibrary };