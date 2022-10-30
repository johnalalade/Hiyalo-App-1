import React from 'react'


const TenantPersonalSettings = () => {
  return (
    <main class="settings-form-container">
      <div class="personal-information-settings">
        <header>
          <h6>Personal Information</h6>
          {/* <a href="www.google.com">Edit</a> */}
        </header>
        <form>
          <label for="apartment type"> First Name</label>
          <input type="text" placeholder="Olakunbi" />

          <label for="name">Last Name</label>
          <input type="text"  placeholder="Olabode" />

          <label for="email">Email Address</label>
          <input type="email" placeholder="olakunbiolabode01@gmail.com" />

          <label for="phone number">Phone Number</label>
          <span class="phone-number">
            <input type="tel"  placeholder="8000000000" />
            <p>+234 &nbsp; |</p>
          </span>

          <button >Update Details</button>

        </form>
      </div>

      <div class="identification-picture-container">
        <div class="identification-form">
          <header className='badger'>
            <h6 className="badge">Identification Number</h6>
           
              <span>
                <p>Verified</p>
                <iconify-icon
                  class="verified-icon"
                  icon="codicon:verified-filled"
                ></iconify-icon>

              </span>

          </header>

          <form action="">

            <label for="apartment type">Document Type</label>
            <select className='select-doc' >
              <option value="National ID">National Identification</option>
              <option value="International Passport">International Passport</option>
              <option value="Driver's License">Driver's License</option>
            </select>

            <label for="apartment type">Document Number</label>
            <input type="text" placeholder="National ID" />

            <label>Upload Document</label>
            <input type="file" accept='image/*'  />

            {/* <label for="name">BVN</label>
            <input type="text" placeholder="*************" value={bvn} onChange={(ev) => setBVN(ev.target.value)} /> */}

            <button>Update Details</button>

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
  )
}

export default TenantPersonalSettings
