let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de  Sapit Bot*

*➤ Grupo oficial del Bot:*
*1.-https://chat.whatsapp.com/CBoAGmEFcCy44xIoWBSgzJ

`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 Sapito BoT 🔥*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
