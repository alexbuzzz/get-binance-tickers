const axios = require('axios')

// Get Binance futures
const getFutures = async () => {
  const res = await axios('https://fapi.binance.com/fapi/v1/ticker/bookTicker')
  const incomeArr = await res.data

  const tickers = {
    usdt: [],
    busd: [],
  }

  incomeArr.forEach((element) => {
    const symbol = element.symbol

    if (symbol.substr(symbol.length - 4) === 'USDT') {
      tickers.usdt.push(symbol)
    }

    if (symbol.substr(symbol.length - 4) === 'BUSD') {
      tickers.busd.push(symbol)
    }
  })

  tickers.usdt.sort()
  tickers.busd.sort()

  return tickers
}

// Get binance SPOT
const getSpot = async () => {
  const res = await axios('https://api.binance.com/api/v3/ticker/price')
  const incomeArr = await res.data

  const tickers = {
    usdt: [],
    btc: [],
    eth: [],
    bnb: [],
  }

  incomeArr.forEach((element) => {
    const symbol = element.symbol

    if (symbol.substr(symbol.length - 4) === 'USDT') {
      tickers.usdt.push(symbol)
    }

    if (symbol.substr(symbol.length - 3) === 'BTC') {
      tickers.btc.push(symbol)
    }

    if (symbol.substr(symbol.length - 3) === 'ETH') {
      tickers.eth.push(symbol)
    }

    if (symbol.substr(symbol.length - 3) === 'BNB') {
      tickers.bnb.push(symbol)
    }
  })

  tickers.usdt.sort()
  tickers.btc.sort()
  tickers.eth.sort()
  tickers.bnb.sort()

  return tickers
}

module.exports = { getFutures, getSpot }
