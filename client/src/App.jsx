import { useState } from 'react'
import Navbar from './components/Navbar'
import Block from './components/Block'
import Transaction from './components/Transaction'
import AccountAddress from './components/AccountAddress'

function App() {

  return (
    <>
      <Navbar />

      <Block />

      <Transaction />

      <AccountAddress />

    </>
  )
}

export default App
