import * as React from 'react';
import { Main } from '../types';

interface DataProps {
  data: Main;
};

interface ContactFormState {
  classForButton?: string;
  contactEmail?: string;
  contactMessage?: string;
  contactName?: string;
  contactSubject?: string;
};

class Contact extends React.Component<DataProps, ContactFormState> {
  constructor(props: DataProps) {
    super(props);
    this.state = {
      classForButton: 'button isDisabled',
      contactEmail: '',
      contactMessage: '',
      contactName: '',
      contactSubject: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = async (event: React.FormEvent) => {
    let target;
    switch(event.currentTarget.id) {

      case 'contactName': {
        target  = event.target as HTMLInputElement;
        await this.setState({
        contactName: target.value
        })
       break;
      }

     case 'contactEmail': {
      target  = event.target as HTMLInputElement;
      await this.setState({
        contactEmail: target.value
      })
      break;
     }

     case 'contactSubject': {
      target  = event.target as HTMLInputElement;
      await this.setState({
        contactSubject: target.value
      })
      break;
     }

     case 'contactMessage': {
      target  = event.target as HTMLTextAreaElement;
      await this.setState({
        contactMessage: target.value
      })
      break;
     }

     default: break;
    };

    if(this.state.contactName && this.state.contactEmail && this.state.contactMessage) {
      this.setState({
        classForButton: 'button isActive'
      })
    }
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

              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" defaultValue="" size={size} id="contactName" name="contactName" required={true} onChange={ this.handleChange } />
                </div>

                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" defaultValue="" size={size} id="contactEmail" name="contactEmail" required={true} onChange={ this.handleChange } />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" defaultValue="" size={size} id="contactSubject" name="contactSubject" onChange={ this.handleChange } />
                </div>

                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={cols} rows={rows} id="contactMessage" required={true} name="contactMessage" onChange={ this.handleChange } />
                </div>

                <div>
                  <a className={this.state.classForButton} href={"mailto:" + email + "?subject=" + this.state.contactSubject + "&body=" + this.state.contactMessage+this.state.contactName}>Submit</a>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>

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
