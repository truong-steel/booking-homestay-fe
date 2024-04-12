import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../page/navbar/Navbar'
import Footer from '../../page/footer/Footer'
import MailList from '../../page/mailList/MailList'
import './AccountList.css'

const AccountList = () => {
    const [accounts , setAccounts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/accounts')
                setAccounts(res.data)
            } catch (error) {
                console.error('Error fetching data :' , error)
            }
        }
        fetchData()
    } , [])
  return (
    <div>
        <Navbar/>
        <h2 className='text'> Accounts List </h2>
        <table className='mt-4'>
            <thead>
                <tr>
                    <th width='20%'>Name</th>
                    <th width='20%'>Email</th>
                    <th width='20%'>Phone</th>
                    <th width='20%'>Role</th>
                </tr>
            </thead>
                <tbody>
                {accounts.map(account => (
                    <tr key={account.id}>
                        <td>{account.fullName}</td>
                        <td>{account.email}</td>
                        <td>{account.phone}</td>
                        <td>{account.roles}</td>
                        <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                    </tr>
                ))}
                </tbody>
        </table>
        <MailList/>
        <Footer/>
    </div>
  )
}

export default AccountList