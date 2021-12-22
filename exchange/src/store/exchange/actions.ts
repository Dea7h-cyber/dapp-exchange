import { createAsyncThunk } from '@reduxjs/toolkit'
import { ethers, utils } from 'ethers'
import { toast } from 'react-toastify'

import { RootState } from 'store'

// const getAddressTransactions = async (address: string) => {
//   const provider = new ethers.providers.EtherscanProvider()
//   return await provider.getHistory(address)
// }

export const metamaskInit = createAsyncThunk<string | null>('exchange/metamaskInit', async () => {
  if (!window.ethereum?.isMetaMask) return null

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_accounts', [])
  const signer = provider.getSigner()
  const address = await signer.getAddress()

  // console.log({
  //   trasnsactions: await getAddressTransactions(address),
  // })

  console.log({
    gasPrice: utils.formatEther(await provider.getGasPrice()),
    balance: utils.formatEther(await signer.getBalance()),
    chainId: await signer.getChainId(),
    transactions: await signer.getTransactionCount(),
  })

  return address
})

export const metamaskConnect = createAsyncThunk<string | null>(
  'exchange/metamaskConnect',
  async () => {
    try {
      if (!window.ethereum?.isMetaMask) throw new Error(`You don't seem to have metamask wallet installed.`)

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])

      toast.success(`Metamask wallet connected!`)
      return await provider.getSigner().getAddress()
    } catch (error: any) {
      toast.error(error.message)
    }

    return null
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState
      return !state.exchange.metamask.inProgress
    },
  },
)
