let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
*ミ💚 Hola estimado usuario 💚彡*

*😈 Actualmente estoy activo.                                                 
que esperas para usarme a tu antojo.😈
 
`.trim(), 'PUEDES VER MI LISTA DE COMANDOS CON #MENUSIMPLE', '🔵 MENÚ 🔵', `${usedPrefix}menu`, '🔴 MENÚ NUEVO🔴', `${usedPrefix}menunuevo`, '🟡 MENÚ AUDIOS 🟡', `${usedPrefix}menuaudios`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
