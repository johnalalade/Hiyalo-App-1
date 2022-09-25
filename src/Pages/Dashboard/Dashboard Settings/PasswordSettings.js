import axios from 'axios';
import React, { useState } from 'react';
import PageLoader from '../../../components/Loader/PageLoader';
import './general-settings.css';

const PasswordSettings = () => {

  const [current_password, setCurrent] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm] = useState("")
  const [loading, setLoading] = useState(false)

  const update = (ev) => {
    setLoading(true)

    ev.preventDefault()

    setLoading(true)

    let data = {
      current_password,
      password,
      agent_id: localStorage.getItem("id")
    }
    if (current_password === "" || password === "" || confirm_password === "") {
      setLoading(false)
      alert("Please fill all fields")
      return false
    }
    if (password !== confirm_password) {
      setLoading(false)
      alert("Password deos'nt match")
      return false
    }
    if (password.length < 8 || confirm_password.length < 8) {
      setLoading(false)
      alert("Password too short")
      return false
    }

    axios.post("https://hiyalo-backend.herokuapp.com/agents/agent-gateway/update-agent-password", data)
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
    <main class="settings-form-container" >

      <div class="personal-information-settings">
        <header>
          <h6>Update Password</h6>
        </header>

        <form>
          <label for="password"> Current Password</label>
          <input type="password" value={current_password} onChange={(ev) => setCurrent(ev.target.value)} placeholder="enter your current password" />

          <label for="new password">New Password</label>
          <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} placeholder="enter a new password here" />

          <label for="confirm new password">Confirm New Password</label>
          <input type="password" value={confirm_password} onChange={(ev) => setConfirm(ev.target.value)} placeholder="confirm your new password" />

          <button onClick={(ev) => update(ev)}>Update Password</button>
        </form>
      </div>
    </main>
  );
};

export default PasswordSettings;
