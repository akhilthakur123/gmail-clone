import React, { useEffect, useState } from 'react'
import Email from './Email'
import useGetAllEmails from '../hooks/useGetAllEmails'
import { useSelector } from 'react-redux';

const Emails = (props) => {
  const { type } = props;
  const { emails, searchText, sentEmails } = useSelector(store => store.app);
  const [filterEmail, setFilterEmail] = useState(emails);

  useEffect(() => {
    const filteredEmail = emails.filter((email) => {
      return email.subject.toLowerCase()
         .includes(searchText.toLowerCase()) 
        || email.to.toLowerCase()
        .includes(searchText.toLowerCase())  
        || email.message.toLowerCase()
      .includes(searchText.toLowerCase())
    });
    const filteredSentEmails = sentEmails.filter((email) => {
      return email.subject.toLowerCase()
         .includes(searchText.toLowerCase()) 
        || email.to.toLowerCase()
        .includes(searchText.toLowerCase())  
        || email.message.toLowerCase()
      .includes(searchText.toLowerCase())
    })
    setFilterEmail(type === "inbox" ? filteredEmail : filteredSentEmails);
  }, [searchText, emails])

  return (
    <div>
      {
        filterEmail && filterEmail?.map((email) => <Email key={email._id} email={email} />)
      }

    </div>
  )
}

export default Emails