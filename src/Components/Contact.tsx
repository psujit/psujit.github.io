import * as React from 'react';
import { Main } from '../types';

interface DataProps {
  data: Main;
};

class Contact extends React.Component<DataProps> {
  handleChange() {
    return;
  }
  render() {
    const { email, name, phone } = this.props.data;
    const { city, state, street, zip } = this.props.data.address;
    const message = this.props.data.contactMessage;

    const size = 35
    const cols = 50;
    const rows = 15;

    return (
      <section id="contact">

        <div className="row section-head">

          <div className="two columns header-col">

            <h1><span>Get In Touch.</span></h1>

          </div>

          <div className="ten columns">

            <p className="lead">{message}</p>

          </div>

        </div>

        <div className="row">
          <div className="eight columns">

            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>

                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" defaultValue="" size={size} id="contactName" name="contactName" required={true} onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" defaultValue="" size={size} id="contactEmail" name="contactEmail" required={true} onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" defaultValue="" size={size} id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={cols} rows={rows} id="contactMessage" required={true} name="contactMessage" />
                </div>

                <div>
                  <a className="submit" href={"mailto:" + email + ""}>Submit</a>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>


          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">

              <h4>Address</h4>
              <p className="address">
                {name}
                {street && <br /> && street}
                <br />{city}, {state} {zip}
                {phone && <br /> && phone}
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
    );
  }
}

export default Contact;
