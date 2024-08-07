import React, { useState } from 'react'
import "./support.scss"

import { t } from 'i18next'

import FileInput from '../../../components/sectionform/FileInput'

function Newticket() {

  const [ticketData , setTicketData] = useState("")

  return (
    <div className="account center support">
    <form>
      <div className="form">
        <div className={`details`}>
          <span className="title">{t("NewTicket")}</span>
          <div className="fields">
            <div className="input-field">
              <label>{t("full Name")}</label>
              <div className="flex">
                <input type="text" placeholder="Enter your name" />
                <i className="fa-solid fa-user-plus"></i>
              </div>
            </div>
            <div className="input-field">
              <label>{t("email")}</label>
              <div className="flex">
                <input type="text" placeholder="Enter your email" />
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
            <div className="input-field">
              <label>{t("Subject")}</label>
              <div className="flex">
                <input type="text" placeholder="Enter your subject" />
                <i className="fa-solid fa-drum-steelpan"></i>
              </div>
            </div>
            <div className="input-field">
              <label>{t("Priority")}</label>
              <div className="flex">
                <input type="text" placeholder="priority" />
                <i className="fa-solid fa-circle-exclamation"></i>
              </div>
            </div>
          </div>
          <div className="area">
              <label htmlFor="">{t("Message")}</label>
              <textarea name="" placeholder={t("Message")} id=""></textarea>
            </div>
            <FileInput label={t("Attachments")}/>
        </div>
        <div className="btns">
          <button>
            <span className="btnText">{t("Submit")}</span>
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Newticket
