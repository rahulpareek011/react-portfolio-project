import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="page contact">
        <h2>Contact Me</h2>
        <p>Email <i className="fa-solid fa-envelope"></i> : <b>itsrahul615@example.com</b></p>
        <a href='https://github.com/rahulpareek011' target='blank' className='btn github' >Github <i className="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/rahulpareek26062007/' target='blank' className='btn linkedin'>Linkedin <i className="fa-brands fa-linkedin-in"></i></a>
        <a href='https://www.linkedin.com/in/rahulpareek26062007/' target='blank' className='btn instagram'>Instagram <i className="fa-brands fa-instagram"></i></a>
      </div>
    </>
  );
};

export default Contact;