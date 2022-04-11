let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de  Sapit Bot*

*➤ Grupo oficial del Bot:*
https://chat.whatsapp.com/HU7rarNBYc1ImtD644WIsh

`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 Sapito BoT 🔥*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
