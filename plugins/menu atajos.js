//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/atajos-bot.mp3'
let menu =`
â­âã ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ð ãââ®
 â    â¡ _*Sapito Bot* â¡
 â ð*Â¡ðolis! ${username}* ð
 â
  â âï¸ *_MENÃ ATAJOS_* âï¸
 âââââââââââââââ
â *<GESTION DE ATAJOS ALOS COMANDOS/>* 
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â  *menu de comandos grupos*
â£ â±â¨ï¸ _${usedPrefix}menugrupos_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â  *MENU DE COMANDOS CREADOR*
â£ â±â¨ï¸ _${usedPrefix}menucreador_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â *MENU DE INFORMACIÃN*
â£ â±â¨ï¸ _${usedPrefix}menuinformacion_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â *MENU DE DESCARGAS*
â£ â±â¨ï¸ _${usedPrefix}menudescargas_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â *MENU DE JUEGOS*
â£ â±â¨ï¸ _${usedPrefix}menujuegos_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â  *MENU DE COSAS RANDOM*
â£ â±â¨ï¸ _${usedPrefix}menurandom_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â  *MENU DE CREACIONES*
â£ â±â¨ï¸ _${usedPrefix}menucreaciones_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â *MENU  AUDIOS*
â£ â±â¨ï¸ _${usedPrefix}menu2_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â *MEN
â£ â±â¨ï¸ 
âââââââââââââââ
âã ðâ¡ðâ¡ðâ¡ðâ¡ð ãâ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'Sapito Bot', 'ð¼ð´ð½ð CREADOR', `#menucreador`, 'ð¼ENU GRUPOS', `#menugrupos`, 'MENU DESCARGAS', `#menudescargas`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'atajos-bot.mp3', null, m, true, {
type: '

, 
ptt: true 
})
}
handler.command = /^(menunuevo)$/i
handler.fail = null
module.exports = handler
