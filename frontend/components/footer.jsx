import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let buttonContent = this.state.isToggleOn ?
      (
        <div>
          <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: "14px", width: "14px", marginRight: "7px", fill: "rgb(118, 118, 118)" }}>
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd">
            </path>
          </svg>
          <p className="footer-text" style={{ fontSize: '16px' }}>Close</p>
        </div>
      ) :
      (
        <div>
          <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '15px', width: '15px', marginRight: "7px" }}>
            <path d="m11 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.95-1.07-.14-.21a6.54 6.54 0 0 1 -.29-.5 12.85 12.85 0 0 1 -.66-1.47c-.09-.25-.17-.5-.25-.76h4.57c-.08.26-.16.51-.25.76a12.85 12.85 0 0 1 -.66 1.47 6.54 6.54 0 0 1 -.29.5l-.14.21c-.31.04-.63.07-.95.07s-.64-.03-.95-.07zm-2.03-6.93h5.95a14.71 14.71 0 0 1 -.41 3h-5.13a14.71 14.71 0 0 1 -.41-3zm .47-4h5.01c.27.88.43 1.88.47 3h-5.95c.04-1.12.2-2.12.47-3zm4.8 10.61a13.85 13.85 0 0 0 1.04-2.61h2.4a7.01 7.01 0 0 1 -3.44 2.61zm4.02-3.61h-2.73c.22-.96.35-1.96.38-3h3.02a6.96 6.96 0 0 1 -.68 3zm-2.34-4a12.86 12.86 0 0 0 -.44-3h2.2a6.95 6.95 0 0 1 1.18 3zm .92-4h-1.68c-.08-.22-.16-.45-.26-.65a8.38 8.38 0 0 0 -.49-.9 7 7 0 0 1 2.43 1.55zm-4.04-1.94.3.3c.05.04.14.15.26.32a6.8 6.8 0 0 1 .64 1.1c.03.07.06.15.09.23h-4.28c.03-.07.06-.15.09-.23a6.78 6.78 0 0 1 .64-1.1c.13-.17.22-.28.26-.32l.3-.3a7.04 7.04 0 0 1 .85-.06c.29 0 .57.02.85.06zm-3.31.4c-.16.25-.32.54-.49.9-.1.21-.17.43-.26.65h-1.68a7 7 0 0 1 2.43-1.55zm-3.28 2.55h2.2c-.25.9-.4 1.9-.44 3h-2.94a6.95 6.95 0 0 1 1.18-3zm1.76 4c .03 1.04.17 2.04.38 3h-2.73a6.96 6.96 0 0 1 -.68-3zm-1.02 4h1.66a13.85 13.85 0 0 0 1.04 2.61 7.01 7.01 0 0 1 -3.44-2.61zm6 5.95v3.05h3.5a.5.5 0 1 1 0 1h-7.93a.5.5 0 0 1 0-1h3.43v-3c-2.12 0-4.15-.66-5.89-1.89a.5.5 0 0 1 .58-.82c1.58 1.11 3.4 1.71 5.31 1.71a9 9 0 0 0 9-9c0-3.34-1.83-6.38-4.75-8.07a.5.5 0 0 1 .5-.86c3.22 1.87 5.25 5.23 5.25 8.93 0 5.19-3.95 9.45-9 9.95z" fillRule="evenodd">
            </path>
          </svg>
          <p className="footer-text">About Kevin</p>
        </div>
      )

    return (
      <div id="footer">
        <div className="footer-button-container">
          <button className="footer-button" onClick={ () => this.toggleButton() }>
            {
              this.state.isToggleOn ? (
                  <div>
                    <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: "14px", width: "14px", marginRight: "7px", fill: "rgb(118, 118, 118)" }}>
                      <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd">
                      </path>
                    </svg>
                    <p className="footer-text" style={{ fontSize: '16px' }}>Close</p>
                  </div>
                ) : (
                  <div>
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '15px', width: '15px', marginRight: "7px" }}>
                      <path d="m11 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.95-1.07-.14-.21a6.54 6.54 0 0 1 -.29-.5 12.85 12.85 0 0 1 -.66-1.47c-.09-.25-.17-.5-.25-.76h4.57c-.08.26-.16.51-.25.76a12.85 12.85 0 0 1 -.66 1.47 6.54 6.54 0 0 1 -.29.5l-.14.21c-.31.04-.63.07-.95.07s-.64-.03-.95-.07zm-2.03-6.93h5.95a14.71 14.71 0 0 1 -.41 3h-5.13a14.71 14.71 0 0 1 -.41-3zm .47-4h5.01c.27.88.43 1.88.47 3h-5.95c.04-1.12.2-2.12.47-3zm4.8 10.61a13.85 13.85 0 0 0 1.04-2.61h2.4a7.01 7.01 0 0 1 -3.44 2.61zm4.02-3.61h-2.73c.22-.96.35-1.96.38-3h3.02a6.96 6.96 0 0 1 -.68 3zm-2.34-4a12.86 12.86 0 0 0 -.44-3h2.2a6.95 6.95 0 0 1 1.18 3zm .92-4h-1.68c-.08-.22-.16-.45-.26-.65a8.38 8.38 0 0 0 -.49-.9 7 7 0 0 1 2.43 1.55zm-4.04-1.94.3.3c.05.04.14.15.26.32a6.8 6.8 0 0 1 .64 1.1c.03.07.06.15.09.23h-4.28c.03-.07.06-.15.09-.23a6.78 6.78 0 0 1 .64-1.1c.13-.17.22-.28.26-.32l.3-.3a7.04 7.04 0 0 1 .85-.06c.29 0 .57.02.85.06zm-3.31.4c-.16.25-.32.54-.49.9-.1.21-.17.43-.26.65h-1.68a7 7 0 0 1 2.43-1.55zm-3.28 2.55h2.2c-.25.9-.4 1.9-.44 3h-2.94a6.95 6.95 0 0 1 1.18-3zm1.76 4c .03 1.04.17 2.04.38 3h-2.73a6.96 6.96 0 0 1 -.68-3zm-1.02 4h1.66a13.85 13.85 0 0 0 1.04 2.61 7.01 7.01 0 0 1 -3.44-2.61zm6 5.95v3.05h3.5a.5.5 0 1 1 0 1h-7.93a.5.5 0 0 1 0-1h3.43v-3c-2.12 0-4.15-.66-5.89-1.89a.5.5 0 0 1 .58-.82c1.58 1.11 3.4 1.71 5.31 1.71a9 9 0 0 0 9-9c0-3.34-1.83-6.38-4.75-8.07a.5.5 0 0 1 .5-.86c3.22 1.87 5.25 5.23 5.25 8.93 0 5.19-3.95 9.45-9 9.95z" fillRule="evenodd">
                      </path>
                    </svg>
                    <p className="footer-text">About Kevin</p>
                  </div>
                )
            }
          </button>
        </div>

        {
          this.state.isToggleOn &&
          (
            <div className="footer-links-container">
              <div className="footer-links">
                {
                  [
                    {
                      title: "GitHub",
                      href: "https://github.com/kevinchen93",
                      icon: "github"
                    },
                    {
                      title: "LinkedIn",
                      href: "https://www.linkedin.com/in/kaychen93/",
                      icon: "linkedin"
                    },
                    {
                      title: "Email",
                      href: "mailto:xkevinchen@gmail.com",
                      icon: "envelope"
                    },
                    {
                      title: "AngelList",
                      href: "https://angel.co/kevin-chen-91",
                      icon: "angellist"
                    },
                    {
                      title: "Portfolio",
                      href: "https://kevinnn.co/",
                      icon: "connectdevelop"
                    }
                  ].map( (obj, i) => (
                    <div className="footer-link-container" key={i}>
                      <i className={(`${obj["title"]}` === "Email" ? "far" : "fab") + ` fa-${obj["icon"]}`}></i>
                      <a className="footer-link" href={`${obj["href"]}`} target={`${obj["title"]}` === "Email" ? "" : "_blank"}>
                        {obj["title"]}
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Footer;
