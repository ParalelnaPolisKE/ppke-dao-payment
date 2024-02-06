import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { ethers } from 'ethers'

const PolygonDAOAddress = '0xFfaAdC1dEf31595d0cc50fbca165A6F34E4402A0'

const PolygonDAOAbi = [{ "inputs": [{ "internalType": "address", "name": "_logic", "type": "address" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "beacon", "type": "address" }], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "implementation", "type": "address" }], "name": "Upgraded", "type": "event" }, { "stateMutability": "payable", "type": "fallback" }, { "stateMutability": "payable", "type": "receive" }]

export default function Balance() {
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()

    async function getBalance() {
        if (!isConnected) throw Error('User disconnected')

        const ethersProvider = new ethers.providers.Web3Provider(walletProvider!)
        const signer = await ethersProvider.getSigner()
        // The Contract object
        const PolygonContract = new ethers.Contract(PolygonDAOAddress, PolygonDAOAbi, signer)
        const PolygonBalance = await PolygonContract.balanceOf(address)

        console.log(ethers.utils.formatUnits(PolygonBalance, 18))
    }

    return <button onClick={getBalance}>Get User Balance</button>
}