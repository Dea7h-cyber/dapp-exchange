import { ContentBlockTitle } from 'app/styles'
import { TransactionReceivedIcon } from 'ui/icons'
import {
  DetailsBottom,
  DetailsTop,
  TransactionDetails,
  TransactionIcon,
  TransactionRow,
  TransactionSubTitle,
} from './styles'

const transactions = [
  { symbol: 'ETH', from: 'Binance', coins: 1.23123, usd: 4100 },
  { symbol: 'ETH', from: 'Binance', coins: 1.23123, usd: 4100 },
  { symbol: 'ETH', from: 'Binance', coins: 1.23123, usd: 4100 },
]

export const Transactions = () => {
  return (
    <div style={{ paddingBottom: 16 }}>
      <ContentBlockTitle>{`Transactions History`}</ContentBlockTitle>
      <TransactionSubTitle>{`Dec 14, 2021`}</TransactionSubTitle>
      {transactions.map((trans, key) => (
        <TransactionRow key={trans.symbol + key}>
          <TransactionIcon>
            <TransactionReceivedIcon />
          </TransactionIcon>
          <TransactionDetails>
            <DetailsTop>Received {trans.symbol}</DetailsTop>
            <DetailsBottom>from {trans.from}</DetailsBottom>
          </TransactionDetails>
          <TransactionDetails>
            <DetailsTop right>
              {trans.coins} {trans.symbol}
            </DetailsTop>
            <DetailsBottom right>$ {trans.usd}</DetailsBottom>
          </TransactionDetails>
        </TransactionRow>
      ))}
      <TransactionSubTitle>{`Dec 11, 2021`}</TransactionSubTitle>
      {transactions.map((trans, key) => (
        <TransactionRow key={trans.symbol + key + trans.symbol}>
          <TransactionIcon>
            <TransactionReceivedIcon />
          </TransactionIcon>
          <TransactionDetails>
            <DetailsTop>Received {trans.symbol}</DetailsTop>
            <DetailsBottom>from ${trans.from}</DetailsBottom>
          </TransactionDetails>
          <TransactionDetails>
            <DetailsTop right>
              {trans.coins} {trans.symbol}
            </DetailsTop>
            <DetailsBottom right>$ {trans.usd}</DetailsBottom>
          </TransactionDetails>
        </TransactionRow>
      ))}
    </div>
  )
}
