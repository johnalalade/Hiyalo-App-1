import axios from 'axios';
import React, { useState } from 'react';
import './general-settings.css'
import PageLoader from '../../../components/Loader/PageLoader';

const PersonalDetailsSettings = ({ f_name, l_name, mail, phonee, doc_number, bn, verified }) => {

  const [first_name, setFName] = useState(f_name);
  const [last_name, setLName] = useState(l_name);
  const [email, setEmail] = useState(mail);
  const [phone, setPhone] = useState(phonee);

  const [doc_type, setDocType] = useState("National ID");
  const [document_number, setDocumentNum] = useState("");
  const [document_image, setDocImage] = useState({});

  // const [bvn, setBVN] = useState(bn);

  const [loading, setLoading] = useState(false)


  const update_personal = (ev) => {
    setLoading(true)

    ev.preventDefault()

    let data = {
      first_name,
      last_name,
      email,
      phone,
      agent_id: localStorage.getItem("id")
    }

    if (first_name === "" || last_name === "" || email === "" || phone === "") {
      alert("Please fill all fields")
      return
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

  const update_docs = (ev) => {
    ev.preventDefault()

    setLoading(true)


    let data = new FormData()

    data.append("document_type", doc_type)
    data.append("document_number", document_number)
    data.append("agent_id", localStorage.getItem("id"))
    data.append("file", document_image)

    axios.post('https://hiyalo-backend.herokuapp.com/agents/agent-gateway/update-agent-identification', data)
      .then(res => {
        if (res.data.message === "success") {
          setLoading(false)
          alert("Success, We'll review your details and verify within the next 24 hours")
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
          <h6>Personal Information</h6>
          {/* <a href="www.google.com">Edit</a> */}
        </header>
        <form>
          <label for="apartment type"> First Name</label>
          <input type="text" value={first_name} onChange={(ev) => setFName(ev.target.value)} placeholder="Olakunbi" />

          <label for="name">Last Name</label>
          <input type="text" value={last_name} onChange={(ev) => setLName(ev.target.value)} placeholder="Olabode" />

          <label for="email">Email Address</label>
          <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} placeholder="olakunbiolabode01@gmail.com" />

          <label for="phone number">Phone Number</label>
          <span class="phone-number">
            <input type="tel" value={phone} onChange={(ev) => setPhone(ev.target.value)} placeholder="8000000000" />
            <p>+234 &nbsp; |</p>
          </span>

          <button onClick={(ev) => update_personal(ev)}>Update Details</button>

        </form>
      </div>

      <div class="identification-picture-container">
        <div class="identification-form">
          <header className='badger'>
            <h6 className={verified === true ? "" : "badge"}>Identification Number</h6>
            {verified ?
              <span>
                <p>Verified</p>
                <iconify-icon
                  class="verified-icon"
                  icon="codicon:verified-filled"
                ></iconify-icon>

              </span>
              : null
            }
          </header>

          <form action="">

            <label for="apartment type">Document Type</label>
            <select className='select-doc' onChange={(ev) => setDocType(ev.target.value)}>
              <option value="National ID">National Identification</option>
              <option value="International Passport">International Passport</option>
              <option value="Driver's License">Driver's License</option>
            </select>

            <label for="apartment type">Document Number</label>
            <input type="text" value={document_number} onChange={(ev) => setDocumentNum(ev.target.value)} placeholder="National ID" />

            <label>Upload Document</label>
            <input type="file" accept='image/*' onChange={(ev) => setDocImage(ev.target.files[0])} />

            {/* <label for="name">BVN</label>
            <input type="text" placeholder="*************" value={bvn} onChange={(ev) => setBVN(ev.target.value)} /> */}

            <button onClick={(ev) => update_docs(ev)}>Update Details</button>

          </form>
        </div>

        {/* <div class="profile-picture-form">
          <header>
            <h6>Your Profile Picture</h6>
          </header>
          <form action="">
            
            <img src="./images/yuo.jpg" alt="" />

            <span>

              <p>Edit your profile picture</p>
              <button type="submit">Update</button>

            </span>
          </form>
        </div> */}
      </div>

    </main>

  );
};

export default PersonalDetailsSettings;
