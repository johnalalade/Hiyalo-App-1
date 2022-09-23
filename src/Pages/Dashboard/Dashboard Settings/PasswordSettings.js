import React from 'react';
import './general-settings.css';
const PasswordSettings = () => {
  return (
    <main class="settings-form-container" >

      <div class="personal-information-settings">
        <header>
          <h6>Create Transaction Pin</h6>
        </header>

        <form>
          <label for="password"> Current Pin</label>
          <input type="password" placeholder="enter your current password" />

          <label for="new password">New Password</label>
          <input type="password" placeholder="enter a new password here" />

          <label for="confirm new password">Confirm New Password</label>
          <input type="password" placeholder="confirm your new password" />

          <button>Update Password</button>
        </form>
      </div>
    </main>
  );
};

export default PasswordSettings;
