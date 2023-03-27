const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

module.exports = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/gmail.readonly'],
    });

    res.redirect(authUrl);
    return;
  }

  try {
    const { tokens } = await oAuth2Client.getToken(code);

    // TODO: トークンを保存するなどの処理を行う
    console.log(tokens);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error retrieving access token', err);
    res.status(500).json({ error: 'Failed to retrieve access token' });
  }
};
