import React from 'react'

const AddNewAdmin = () => {
  return (
    <main className='settings-form-container'>

        <div className='personal-information-settings'>
            <header>
                <h6>Add New Admin</h6>
            </header>

            <form action="">

                <label htmlFor="">First Name</label>
                <input type="text" placeholder='Enter First Name' />

                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Enter Last Name' />

                <label htmlFor="">Email Address</label>
                <input type="text" placeholder='Enter New Admin Password' />

                <label for="phone number">Phone Number</label>
                <span class="phone-number">
                    <input type="tel" placeholder="8000000000" />
                    <p>+234 &nbsp; |</p>
                </span>

                <button>Create New Admin</button>
            </form>
        </div>
    </main>
  )
}

export default AddNewAdmin