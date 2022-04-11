let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
╭
══〘 💚⚡💚⚡💚⚡💚 〙═╮

║═ *Sapito Bot*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

║⇎ *💚𝗛ola, 💚*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

║⇎ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 𝑑𝑒𝑙 𝐵𝑜𝑡:Sapote xd


║⇎ *𝑁𝑢𝑚𝑒𝑟𝑜 𝑑𝑒𝑙 𝑐𝑟𝑒𝑎𝑑𝑜𝑟:* *wa.me/595983186566*

║⇎ *𝑁𝑢𝑚𝑒𝑟𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡 𝑜𝑓𝑖𝑐𝑖𝑎𝑙²:* *wa.me/595983186566 (𝐸𝐿 𝑆𝐴𝑁𝑇𝐼 𝐵𝑂𝑇 𝑂𝐹𝐼𝐶𝐼𝐴𝐿 El mas guapo)*


╰══╡💚⚡💚⚡💚⚡💚╞══╯

┏━━━━━━━━━━━━━┓

┃ *<INFORMACIÓN|MENUS/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱🔰 _.menuinformacion_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃  *ATAJOS DE LOS COMANDOS*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➬🔥 _.menunuevo_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<NUMERO DEL CREADOR/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➬💚 _.wa.me/595983186566

┗━━━━━━━━━━━━━┛

*Hola we*

┏━━━━━━━━━━━━━┓

┃  *colaboraciónes del bot agromos sp*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱🔰 _.creditos_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

    *REGLAS*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➬❗ _.reglas_

┣ ➱🔰 _.Bot_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *COVERSAR CON EL BOT AGROMOS SP*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

*también puedes con (bot|alexa|siri|ect)

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➬⛔ _.simi_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<REPORTA FALLOS EN ALGÚN COMANDO*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋

┣ ➬⛔ _.bug_

┃ Reporta cualquier comando que falle para poder solucionarlo

comando con fallas*_

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋

┣ ➬⛔ _.bug_

┣ ➬⛔ _.report *comando con fallas*_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *OBTENER EL BOT AGROMOS SP*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋

┃➱♻️ _.instalarbot_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<CONVIERTETE EN SUB BOT/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱💚 _.stop_

┣ ➱💚 _.jadibot_

┣ ➱💚 _.getcode_

┗━━━━━━━━━━━━━┛

┃ *<UNE UN BOT A TU GRUPO/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋

┣ ➱🤖 _.join *link del grupo*_ 

┣ ➱🤖 _.bots_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<GESTION DE GRUPOS/>* 

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱✴ _.admins *texto*_ 

┣ ➱✴ _.añadir *numero*_ 

┣ ➱✴ _.sacar @tag_

┣ ➱✴ _.save *@tag + nombre de contacto*_

┣ ➱✴ _.daradmin *@tag*_

┣ ➱✴ _.quitaradmin *@tag*_

┣ ➱✴ _.grupo *abrir / cerrar*_

┣ ➱✴ _.enable welcome_

┣ ➱✴ _.disable welcome_

┣ ➱✴ _.enable antilink_

┣ ➱✴ _.disable antilink_

┣ ➱✴ _.enable antilink2_

┣ ➱✴ _.disable antilink2_

┣ ➱✴ _.enable delete_

┣ ➱✴ _.disable  delete_ 

┣ ➱✴ _.link_

┣ ➱✴ _.notificar *texto*_

┣ ➱✴ _.setname *Nuevo nombre del grupo*_

┣ ➱✴ _.setdesc *Nueva descripción del grupo*_

┣ ➱✴ _.infogrupo_

┣ ➱✴ _.invocar *texto*_

┣ ➱✴ _.del *responder a un mensaje del bot*_

┣ ➱✴ _.fantasmas_

┣ ➱✴ _.banchat_

┣ ➱✴ _.unbanchat_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<TOPS GRUPOS>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱🎖️ _.top10gays_

┣ ➱🎖️ _.toplind@s_

┣ ➱🎖️ _.topput@s_

┣ ➱🎖️ _.toppajer@s_

┣ ➱🎖️ _.topotakus_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<JUEGOS GRUPOS>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱🎴 _.math *modo*_

┣ ➱🥌 _.ttt *name del la sala*_

┣ ➱🎴 _.delttt *nombre del la sala*_

┣ ➱🥌 _.2gay *@tag*_

┣ ➱🎴 _.gay *@tag / nombre*_

┣ ➱🥌 _.lesbi *@tag / nombre*_

┣ ➱🎴 _.pajero *@tag / nombre*_

┣ ➱🥌 _.pajera *@tag / nombre*_

┣ ➱🎴 _.puta *@tag / nombre*_

┣ ➱🥌 _.puto *@tag / nombre*_

┣ ➱🎴 _.rata *@tag / nombre*_

┣ ➱🥌 _.manco *@tag / nombre*_

┣ ➱🎴 _.manca *@tag / nombre*_

┣ ➱🥌 _.formarpareja_

┣ ➱🎴 _.dado

┣ ➱🥌 _.formartrio_

┣ ➱🎴 _.love *@tag / nombre*_

┣ ➱🥌 _.amigorandom_

┣ ➱🎴 _.slot *cantidad*_

┣ ➱🥌 _.ppt *piedra / papel / tijera*_

heteroprostituta *@tag / nombre*_

┣ ➱🥌 _.prostituto *@tag / nombre*_

┣ ➱🥌 _.hetero *@tag / nombre*_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<DESCARGAS/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱📤 _.ytcomment_

┣ ➱📂 _.imagen *texto*_

┣ ➱📥 _.ytsearch *texto*_

┣ ➱📁 _.dlaudio *link yt*_

┣ ➱📤 _.dlvid *link yt*_

┣ ➱📁 _.ytmp3 *link yt*_

┣ ➱📥 _.ytmp4 *link yt*_

┣ ➱📁 _.ytmp4.2 *link yt*_

┣ ➱📤 _.play *titulo del audio*_

┣ ➱📁 _.play2 *titulo del video*_

┣ ➱📥 _.play3 *titulo del audio/video*_

┣ ➱📁 _.play4 *titulo del video*_

┣ ➱📤 _.letra *nombredelacanción*_

┣ ➱📁 _.google *texto*_

┣ ➱📥 _.googlef *texto*_

┣ ➱📂 _.wikipedia *palabra clave*_

┣ ➱📤 _.pinterestvideo *link de pinterest*_

┣ ➱📂 _.tiktokaudio *link del tiktok*_

┣ ➱📥 _.tiktok *link*_

┣ ➱📂 _.spotify *autor, cancion*_

┣ ➱📤 _.acortar *link*_

┣ ➱📂 _.pinterest *texto*_

┣ ➱📥 _.xnxx *link de xnxx*_

┣ ➱📂 _.xnxxsearch *texto*_

┣ ➱📤 _.ssweb *link*_

┣ ➱📂 _.igstory *username*_

┣ ➱📥 _.igstalk *username*_

┣ ➱📂 _.animeinfo *nombre del anime*_

┣ ➱📤 _.twvid *link de video de twitter*_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<CREADORES/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱📑 _.s_

┣ ➱📑 _.sticker_

┣ ➱📑 _.semoji_

┣ ➱📑 _.wasted_

┣ ➱📑 _.stonks_

┣ ➱📑 _.trash_

┣ ➱📑 _.rainbow_

┣ ➱📑 _.circle_

┣ ➱📑 _.trigger_

┣ ➱📑 _.stickermaker_

┣ ➱📑 _.attp *texto*_

┣ ➱📑 _.style *texto*_

┣ ➱📑 _.attp2 *texto*_

┣ ➱📑 _.stickerfilter_

┣ ➱📑 _.trigger *@tag*_

┣ ➱📑 _.mp3 *responde a un video*_

┣ ➱📑 _.img *responde a un sticker*_

┣ ➱📑 _.blur *responde a una imagen*_

┣ ➱📑 _.swm *link de imagen de google*_

┣ ➱📑 _.gif *responde a un sticker/video*_

┣ ➱📑 _.tovideo *responde a una nota de voz*_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<RANDOM|EXTRAS/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱💎 _.doremon_

┣ ➱⚜ _.yeni_

┣ ➱💎 _.jiso_

┣ ➱⚜ _.pugb_

┣ ➱💎 _.rose_

┣ ➱⚜ _.fondogaming_

┣ ➱💎 _.fondoaesthetic_

┣ ➱⚜ _.fondomontaña_

┣ ➱💎 _.frase_

┣ ➱⚜ _.futbol_

┣ ➱💎 _.Messi_

┣ ➱⚜ _.animal_

┣ ➱💎 _.meme_

┣ ➱⚜ _.meme2_

┣ ➱💎 _.meme3_

┣ ➱⚜ _.cat_

┣ ➱💎 _.dog_

┣ ➱⚜ _.pikachu_

┣ ➱💎 _.waifu_

┣ ➱⚜ _.blackpink_

┣ ➱💎 _.reto_

┣ ➱⚜ _.verdad_

┣ ➱💎 _.imagenrandom_

┣ ➱⚜ _.neko_

┣ ➱💎 _.lolivid_

┣ ➱💎 _.iqtest_

┣ ➱⚜ _.kpopitzy_

┣ ➱💎 _.navidad_

┣ ➱⚜ _.loli_

┣ ➱💎 _.gawrgura_

┣ ➱⚜ _.miku_

┣ ➱💎 _.nyan_

┣ ➱💎 _.pat_

┣ ➱⚜ _.itachi_

┣ ➱💎 _.slap_

┣ ➱⚜ _.pat_

┣ ➱💎 _.perfil_

┣ ➱⚜ _.scan_

┣ ➱💎 _.kpop_

┣ ➱⚜ _.qr *texto*_

┣ ➱💎 _.afk *motivo*_

┣ ➱⚜ _.CristianoRonaldo_

┣ ➱💎 _.pregunta *pregunta*_

┣ ➱⚜ _.mention *texto*_

┣ ➱💎 _.spamchat *texto*_

┣ ➱⚜ _.traducir es *texto*_

┣ ➱💎 _.zodiac *AAAA MM DD*_

┣ ➱⚜ _.readmore *texto1| texto2*_

┣ ➱💎 _.calc *expresión matemática*_ 

┣ ➱⚜ _.spamwa *numero|texto|cantidad*_

┣ ➱💎 _.readqr *responde a un código QR*_

┣ ➱⚜ _.anime *random / waifu / husbu /neko*_

┣ ➱💎 _.subirestado *texto / responder video, imagen o gif*_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ 

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┃ 

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ 

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┃ Responde a un audio o nota de voz

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱🎤 _.bass_

┣ ➱🎤 _.deep_

┣ ➱🎤 _.earrape_

┣ ➱🎤 _.fast_

┣ ➱🎤 _.fat_

┣ ➱🎤 _.nightcore_

┣ ➱🎤 _.reverse_

┣ ➱🎤 _.robot_

┣ ➱🎤 _.slow_

┣ ➱🎤 _.smooth_

┣ ➱🎤 _.vibracion *cantidad*_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<CHAT ANONIMO/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱📱 _.start_

┣ ➱📱 _.next_

┣ ➱📱 _.leave_

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *<LOGOS PERSONALIZADOS/>*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱🎨 _.logos_ (lista)

┣ ➱🎨 _.lolice_

┣ ➱🎨 _.simpcard_

┣ ➱🎨 _.hornycard_ 

┣ ➱🎨 _.lblackpink_

┣ ➱🎨 _.coffe *texto*_

┣ ➱🎨 _.tahta *texto*_

┣ ➱🎨 _.nulis *texto*_

┣ ➱🎨 _.nulis2 *texto*_

┣ ➱🎨 _.lolice *@tag*_

┣ ➱🎨 _.simpcard *@tag*_

┣ ➱🎨 _.logotaza *texto*_ 

┣ ➱🎨 _.logocesped *texto*_ 

┣ ➱🎨 _.logotaza2 *texto*_ 

┣ ➱🎨 _.flaming *texto*_ 

┣ ➱🎨 _.logofire *texto*_

┣ ➱🎨 _.logosky *texto*_

┣ ➱🎨 _.logocorazon *texto*_

┣ ➱🎨 _.logorandom *texto*_

┣ ➱🎨 _.neonfire *texto*_ 

┣ ➱🎨 _.technology *texto*_ 

┣ ➱🎨 _.playa *texto*_ 

┣ ➱🎨 _.lovemessages *texto*_

┣ ➱🎨 _.cementerio *texto*_

┣ ➱🎨 _.romanticdouble *texto*_

┣ ➱🎨 _.romanticmessages *texto*_

  El que lee esto es gay 

┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓

┃ *PROPIETARO DEL BOT*

┃  *Dato solo el creador los puede usar o bots oficales*

║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 

┣ ➱👑 _.menucreador_

┗━━━━━━━━━━━━━┛

SapitoBot




┣


`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menusimple)$/i
handler.fail = null
module.exports = handler
