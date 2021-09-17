import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const emailVazio = (email) => {
  if (email === "") {
    return null
  }
}

const emailPreenchido = (email) => {
  const styleV = {
    color: "green"
  }

  const stylei = {
    color: "red"
  }

  if (email !== "") {
    return (
      verifyEmail(email)
      ? <h3 style={ styleV }>Email Valido</h3>
      : <h3 style={ stylei }>Email Inválido</h3>
    )
  }
}

const ValidEmail = (props) => {
  const { email } = props;

  return (
    <div>
      {
        email
        ? emailPreenchido(email)
        : emailVazio(email)
      }
    </div>
  );
};

export default ValidEmail;