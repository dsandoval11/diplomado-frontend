import { useEffect, useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { socket } from "../../utils/socket";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on("new-message", (newMessage) => {
      console.log(newMessage);
      setMessages((oldMessages) => (
        [...oldMessages, newMessage.message]
      ))
    });
  }, []);

  const sendMessage = () => {
    socket.emit('chat-global', message);
    setMessage('')
  };

  return (
    <MainLayout>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey", minHeight: '150px' }}>
        {messages.map((text, index) => (
          <Typography key={index}>{text}</Typography>
        ))}
      </Box>
      <Grid>
        <TextField
          onKeyDown={(e) => {(
            e.key === 'Enter' ? sendMessage() : null
          )}}
          onChange={(event) => setMessage(event.target.value)}
          fullWidth
          value={message}
          name="message"
          variant="outlined"
          placeholder="Escriba el mensaje"
          sx={{ mt: 2 }}
        />
        <Button onClick={sendMessage}>Enviar</Button>
      </Grid>
    </MainLayout>
  );
};
