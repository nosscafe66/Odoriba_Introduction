import { useEffect, useState } from "react";

export default function Gmail() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/about/api/gmail");
      console.log(res)
      const data = await res.json();
      setMessages(data.messages);
    };

    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => console.log(messages)}>Get Messages</button>
    </div>
  );
}