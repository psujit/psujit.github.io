import emailJS from '@emailjs/browser';
import * as React from 'react'
import { Main } from '../types'

interface DataProps {
  data: Main
}

export const Contact: React.FunctionComponent<DataProps> = (props) => {

  const form = React.useRef<HTMLFormElement>({} as HTMLFormElement);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailJS.sendForm('service_48y7tes', 'template_rodgse3', form.current, 'mo1EEVva1_Mz_12j0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const { contactEmailField, contactMessage, contactMessageField, contactNameField, contactSubmitField, email, name } = props.data
  const { city, state, zip } = props.data.address

  const size = 35
  const cols = 50
  const rows = 15

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="from_name">
                {contactNameField} <span className="required">*</span>
              </label>
              <input
                type="text"
                defaultValue=""
                size={size}
                id="from_name"
                name="from_name"
                required={true}
              />
            </div>

            <div>
              <label htmlFor="from_email">
                {contactEmailField} <span className="required">*</span>
              </label>
              <input
                type="text"
                defaultValue=""
                size={size}
                id="from_email"
                name="from_email"
                required={true}
              />
            </div>

            <div>
              <label htmlFor="message">
                {contactMessageField} <span className="required">*</span>
              </label>
              <textarea
                cols={cols}
                rows={rows}
                id="message"
                required={true}
                name="message"
              />
            </div>

            <div className="submit">
              <input type="submit" value={contactSubmitField} />
            </div>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check" />
            Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address</h4>
            <p className="address">
              {name}
              <br />
              {city}, {state} {zip}
              <br />
              {email}
            </p>
          </div>

          {/* <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b><a href="#">2 Days Ago</a></b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b><a href="#">3 Days Ago</a></b>
                </li>
              </ul>
            </div> */}
        </aside>
      </div>
    </section>
  )
}
