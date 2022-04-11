function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '+595 983 186566', 'Sapito FICIAL', m)}
handler.command = /^(contacto|Sapito|creator|creador|propietario|dueño)$/i
module.exports = handler
