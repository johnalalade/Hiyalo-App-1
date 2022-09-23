import React from 'react';

import './general-settings.css'

const PersonalDetailsSettings = () => {
  return (

        <main class="settings-form-container">
          <div class="personal-information-settings">
            <header>
              <h6>Personal Information</h6>
              <a href="www.google.com">Edit</a>
            </header>
            <form>
              <label for="apartment type"> Firs t Name</label>
              <input type="text" placeholder="Olakunbi" />
              <label for="name">Last Name</label>
              <input type="text" placeholder="Olabode" />
              <label for="email">Email Address</label>
              <input type="email" placeholder="olakunbiolabode01@gmail.com" />

              <label for="phone number">Phone Number</label>
              <span class="phone-number">
                <input type="tel" placeholder="8000000000" />
                <p>+234 &nbsp; |</p>
              </span>
            </form>
          </div>

          <div class="identification-picture-container">
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

            <div class="profile-picture-form">
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
            </div>
          </div>
        </main>

  );
};

export default PersonalDetailsSettings;
