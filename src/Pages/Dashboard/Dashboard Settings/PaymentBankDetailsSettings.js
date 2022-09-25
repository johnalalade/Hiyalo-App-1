import React, { useState } from 'react';
import './general-settings.css'
import axios from 'axios';
import banks from '../../../components/banks';
import PageLoader from '../../../components/Loader/PageLoader';

const PaymentBankDetailsSettings = () => {

  const [bank_name, setBankName] = useState("")
  const [bank_code, setBankCode] = useState("")
  const [account_number, setAccNum] = useState("")
  const [account_name, setAccName] = useState("")

  const [loading, setLoading] = useState(false)

  const bank = (ev) => {

    let bank_data = JSON.parse(ev)
    setBankName(bank_data.Name)
    setBankCode(bank_data.Code)

    if(account_number.length === 10){
      axios.post('', {

      })
      .then(acc => {
        console.log(acc.data)
        setAccName(acc.data)
      })
      .catch(err => {
        alert(err)
        
      })
    }

    console.log(bank_data.Name)
  }

  const acc_num = (v) => {
    setAccNum(v)
  }

  const submit = (ev) => {
    setLoading(true)

    ev.preventDefault()
    setLoading(false)

    let data = {

      bank: {
        bank_code,
        bank_name,
        account_number,
        account_name,
        agent_id: localStorage.getItem("id")
      }

    }

    if (account_name === "" || account_number.length < 10) {
      setLoading(false)
      alert("Please provide correct details")
      return false
    }

    axios.post('', data)
      .then(res => {
        if (res.data.message === "success") {
          setLoading(false)
          alert("Success")
        } else {
          setLoading(false)
          alert(res.data.details)
        }
      })
      .catch(err => {
        setLoading(false)
        alert(err)
        return false
      })

  }

  if (loading) {
    return (
      <div className="spinner">
        <PageLoader />
      </div>
    )
  }

  return (
    <main class="settings-form-container">
      <div class="personal-information-settings">
        <header>
          <h6>Withdrawal Method</h6>
          {/* <a href="www.google.com">+ Add Account Details</a> */}
        </header>
        <form>

          <label for="name">Choose Bank</label>
          <select onChange={(ev) => bank(ev.target.value)}>
            <option>Choose Bank</option>
            {banks.map(ban => 
              <option value={JSON.stringify(ban)}>{ban.Name}</option>
            )}
          </select>

          <label for="email">Account Number</label>
          <input type="text" value={account_number} onChange={(ev) => acc_num(ev.target.value)} placeholder="000000000000" />

          <label for="apartment type"> Account Name</label>
          <input type="name" placeholder="Auto fill" value={account_name} />

          <button onClick={(ev) => submit(ev)}>Confirm Account Details</button>
        </form>
      </div>

      {/* <div class="identification-picture-container">
        <div class="identification-form">
          <header>
            <h6>Identification Number</h6>
            <span>
              <p>Verified</p>
              <iconify-icon
                class="verified-icon"
                icon="codicon:verified-filled"
              ></iconify-icon>
            </span>
          </header>
          <form action="">
            <label for="apartment type"> Document</label>
            <input type="text" placeholder="National ID" />
            <label for="name">BVN</label>
            <input type="text" placeholder="*************" />
          </form>
        </div>
      </div> */}

    </main>
  );
};

export default PaymentBankDetailsSettings;