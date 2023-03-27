async function getEmailList() {
    const accessToken = await getAccessToken();
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
  
    const { data: { messages } } = await gmail.users.messages.list({ userId: 'me', auth: oAuth2Client, maxResults: 10 });
  
    return messages;
  }