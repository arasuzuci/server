const mailTemp = (link, token) => `<!DOCTYPE html>
<html>
  <head>
    <title>Forgot Password</title>
  </head>
  <body>
    <p>
      We received a request to reset your password. If you didn't make this
      request, you can ignore this email.
    </p>

    <p>Click the link below to reset your password:</p>

    <p><a href="${link}/${token}">Reset Password</a></p>

    <p>
      If the link doesn't work, you can copy and paste the following URL into
      your browser:
    </p>

    <p>{{resetLink}}</p>

    <p>This link will expire in 10 mins.</p>
  </body>
</html>
`;

module.exports = mailTemp;
