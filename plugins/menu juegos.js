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
let vn = './media/juegos-bot.mp3'
let menu =`
โญโใ ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐ ใโโฎ
 โ    โก _*Sapito Bot_* โก
 โ ๐*ยก๐ola! ${username}* ๐
 โ
 โ โ๏ธ *_MENร JUEGOS* โ๏ธ
 โโโโโโโโโโโโโโโ
โ *<GESTION DE JUEGOS/>* 
โโกโกโกโกโกโกโกโกโก
โ *<JUEGOS/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโฃ 
โฑ๐ _${usedPrefix}math *modo*_
โฃ โฑ๐ _${usedPrefix}ttt *name del la sala*_
โฃ โฑ๐ _${usedPrefix}delttt *nombre del la sala*_
โฃ โฑ๐ _${usedPrefix}2gay *@tag*_
โฃ โฑ๐ _${usedPrefix}gay *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}lesbi *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}pajero *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}pajera *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}puta *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}puto *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}rata *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}manco *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}manca *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}formarpareja_โฃ โฑ๐ _${usedPrefix}dado
โฃ โฑ๐ _${usedPrefix}formartrio_
โฃ โฑ๐ _${usedPrefix}love *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}amigorandom_
โฃ โฑ๐ _${usedPrefix}slot *cantidad*_
โฃ โฑ๐ _${usedPrefix}ppt *piedra / papel / tijera*_
โฃ โฑ๐ _${usedPrefix}prostituta *@tag / nombre*_
โฃ โฑ๐ _${usedPrefix}prostituto *@tag / nombre*_ 
โฃ โฑ๐ _${usedPrefix}hetero *@tag / nombre*_
โโโโโโโโโโโโโโโ
โใ ๐โก๐โก๐โก๐โก๐ ใโ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, .Sapito Botยฉ', 'HOLA', `Hola`, '๐ผ๐ด๐ฝ๐ INFORMACIรN ', `#minformacion`, '๐ถ๐๐๐ฟ๐พ ๐พ๐ต๐ธ๐ฒ๐ธ๐ฐ๐ป', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'juegos-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menujuegos)$/i
handler.fail = null
module.exports = handler
