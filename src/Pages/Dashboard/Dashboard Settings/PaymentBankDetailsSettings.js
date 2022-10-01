import React, { useState } from 'react';
import './general-settings.css'
import axios from 'axios';
import banks from '../../../components/banks';
import PageLoader from '../../../components/Loader/PageLoader';

const PaymentBankDetailsSettings = ({banking}) => {

  const [bank_name, setBankName] = useState(banking ? banking.bank_name : "")
  const [bank_code, setBankCode] = useState("")
  const [account_number, setAccNum] = useState(banking ? banking.account_number : "")
  const [account_name, setAccName] = useState(banking? banking.account_name : "")

  const [loading, setLoading] = useState(false)

  const bank = (ev) => {

    let bank_data = JSON.parse(ev)
    setBankName(bank_data.Name)
    setBankCode(bank_data.Code)

    if (account_number.length === 10) {
      setLoading(true)

      axios.post('https://hiyalo-backend.herokuapp.com/agents/agent-gateway/get-account-name', {
        account_number,
        bank_code: bank_data.Code
      })
        .then(acc => {
          setLoading(false)
          console.log(acc.data)
          setAccName(acc.data.account_name)
        })
        .catch(err => {
          setLoading(false)
          alert(err)

        })
    }

    console.log(bank_data.Name)
  }

  const acc_num = (v) => {
    setAccNum(v)
    
    if (v.length === 10 && bank_name !== "") {
      setLoading(true)
      axios.post('https://hiyalo-backend.herokuapp.com/agents/agent-gateway/get-account-name', {
        account_number: v,
        bank_code
      })
        .then(acc => {
          setLoading(false)
          console.log(acc.data)
          setAccName(acc.data.account_name)
        })
        .catch(err => {
          setLoading(false)
          alert(err)

        })

    }

  }

  const submit = (ev) => {
    ev.preventDefault()
    setLoading(true)

    let data = {

      bank: {
        bank_code,
        bank_name,
        account_number,
        account_name,
        agent_id: localStorage.getItem("id")
      },
      agent_id: localStorage.getItem("id")

    }

    if (account_name === "" || account_number.length < 10) {
      setLoading(false)
      alert("Please provide correct details")
      return false
    }

    axios.post('https://hiyalo-backend.herokuapp.com/agents/agent-gateway/update-agent', data)
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