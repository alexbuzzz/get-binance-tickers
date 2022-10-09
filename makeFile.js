const binance = require('./binance')
const fs = require('fs')

// Make binance futures files
const makeBinanceFutFile = async () => {
  let data = await binance.getFutures()

  // USDT
  let usdt = ''

  data.usdt.forEach((element) => {
    usdt = usdt.concat('BINANCE:' + element + 'PERP' + '\n')
  })

  fs.writeFile('./tradingview/BINA-FUT-USDT.txt', `${usdt}`, (error) => {
    error ? console.log(error) : null
  })

  // BUSD
  let busd = ''

  data.busd.forEach((element) => {
    busd = busd.concat('BINANCE:' + element + 'PERP' + '\n')
  })

  fs.writeFile('./tradingview/BINA-FUT-BUSD.txt', `${busd}`, (error) => {
    error ? console.log(error) : null
  })

  console.log('binance fut DONE')
}

// Make binance spot file
const makeBinanceSpotFile = async () => {
  let data = await binance.getSpot()

  // USDT
  let usdt = ''

  data.usdt.forEach((element) => {
    usdt = usdt.concat('BINANCE:' + element + '\n')
  })

  fs.writeFile('./tradingview/BINA-SPOT-USDT.txt', `${usdt}`, (error) => {
    error ? console.log(error) : null
  })

  // BTC
  let btc = ''

  data.btc.forEach((element) => {
    btc = btc.concat('BINANCE:' + element + '\n')
  })

  fs.writeFile('./tradingview/BINA-SPOT-BTC.txt', `${btc}`, (error) => {
    error ? console.log(error) : null
  })

  // ETH
  let eth = ''

  data.eth.forEach((element) => {
    eth = eth.concat('BINANCE:' + element + '\n')
  })

  fs.writeFile('./tradingview/BINA-SPOT-ETH.txt', `${eth}`, (error) => {
    error ? console.log(error) : null
  })

  // BNB
  let bnb = ''

  data.bnb.forEach((element) => {
    bnb = bnb.concat('BINANCE:' + element + '\n')
  })

  fs.writeFile('./tradingview/BINA-SPOT-BNB.txt', `${bnb}`, (error) => {
    error ? console.log(error) : null
  })

  console.log('binance spot DONE')
}

// Make binance files for EASYSCALP
const makeBinanceEasyScalpFiles = async () => {
  let data = await binance.getFutures()

  // USDT FUT
  let usdtFUT = ''

  data.usdt.forEach((element) => {
    usdtFUT = usdtFUT.concat(element + '\n')
  })

  fs.writeFile('./easyscalp/BINA-FUT-USDT.txt', `${usdtFUT}`, (error) => {
    error ? console.log(error) : null
  })

  // USDT SPOT pair
  let usdtSPOTpair = ''

  data.usdt.forEach((element) => {
    usdtSPOTpair = usdtSPOTpair.concat(
      element.replace('USDT', '/').replace('1000', '') + 'USDT' + '\n'
    )
  })

  fs.writeFile(
    './easyscalp/BINA-SPOT-PAIR-USDT.txt',
    `${usdtSPOTpair}`,
    (error) => {
      error ? console.log(error) : null
    }
  )

  // BUSD FUT
  let busdFUT = ''

  data.busd.forEach((element) => {
    busdFUT = busdFUT.concat(element + '\n')
  })

  fs.writeFile('./easyscalp/BINA-FUT-BUSD.txt', `${busdFUT}`, (error) => {
    error ? console.log(error) : null
  })

  // BUSD SPOT pair
  let busdSPOTpair = ''

  data.busd.forEach((element) => {
    busdSPOTpair = busdSPOTpair.concat(
      element.replace('BUSD', '/').replace('1000', '') + 'BUSD' + '\n'
    )
  })

  fs.writeFile(
    './easyscalp/BINA-SPOT-PAIR-BUSD.txt',
    `${busdSPOTpair}`,
    (error) => {
      error ? console.log(error) : null
    }
  )

  console.log('EasyScalp DONE')
}

module.exports = {
  makeBinanceFutFile,
  makeBinanceSpotFile,
  makeBinanceEasyScalpFiles,
}
