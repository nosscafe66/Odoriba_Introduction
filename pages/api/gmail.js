import { google } from "googleapis";

export default async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uris: process.env.REDIRECT_URIS,
      refresh_token: process.env.REFRESH_TOKEN,
      type: "authorized_user",
    },
    scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
  });

  const gmail = google.gmail({ version: "v1", auth });

  // メールのリストを取得するAPIを呼び出す
  const result = await gmail.users.messages.list({
    userId: "me",
  });

  res.json(result.data);
};
