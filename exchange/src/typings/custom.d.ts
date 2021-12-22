type EthereumOnType = 'accountsChanged' | 'chainChanged'

interface Window {
  ethereum?: {
    isMetaMask: boolean
    on: (type: EthereumOnType, cb: (accounts: string[]) => void) => void
    removeListener: (type: EthereumOnType, cb: (accounts: string[]) => void) => void
  }
}

interface ProviderRpcError extends Error {
  message: string
  code: number
  data?: unknown
}
