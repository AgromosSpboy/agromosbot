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
â­
ââã ðâ¡ðâ¡ðâ¡ð ãââ®

ââ *Sapito Bot*

ââââââââââââââââââââââââ 

ââ *ððola, ð*

ââââââââââââââââââââââââ 

ââ *ð¶ðððððð ððð ðµðð¡:Sapote xd


ââ *ðð¢ðððð ððð ððððððð:* *wa.me/595983186566*

ââ *ðð¢ðððð ððð ððð¡ ðððððððÂ²:* *wa.me/595983186566 (ð¸ð¿ ðð´ððð¼ ðµðð ðð¹ð¼ð¶ð¼ð´ð¿ El mas guapo)*


â°âââ¡ðâ¡ðâ¡ðâ¡ðââââ¯

âââââââââââââââ

â *<INFORMACIÃN|MENUS/>*

ââââââââââââââââââââââââ 

â£ â±ð° _.menuinformacion_

âââââââââââââââ

âââââââââââââââ

â  *ATAJOS DE LOS COMANDOS*

ââââââââââââââââââââââââ 

â£ â¬ð¥ _.menunuevo_

âââââââââââââââ

âââââââââââââââ

â *<NUMERO DEL CREADOR/>*

ââââââââââââââââââââââââ 

â£ â¬ð _.wa.me/595983186566

âââââââââââââââ

*Hola we*

âââââââââââââââ

â  *colaboraciÃ³nes del bot agromos sp*

ââââââââââââââââââââââââ 

â£ â±ð° _.creditos_

âââââââââââââââ

âââââââââââââââ

    *REGLAS*

ââââââââââââââââââââââââ 

â£ â¬â _.reglas_

â£ â±ð° _.Bot_

âââââââââââââââ

âââââââââââââââ

â *COVERSAR CON EL BOT AGROMOS SP*

ââââââââââââââââââââââââ 

*tambiÃ©n puedes con (bot|alexa|siri|ect)

ââââââââââââââââââââââââ 

â£ â¬â _.simi_

âââââââââââââââ

âââââââââââââââ

â *<REPORTA FALLOS EN ALGÃN COMANDO*

ââââââââââââââââââââââââ

â£ â¬â _.bug_

â Reporta cualquier comando que falle para poder solucionarlo

comando con fallas*_

ââââââââââââââââââââââââ

â£ â¬â _.bug_

â£ â¬â _.report *comando con fallas*_

âââââââââââââââ

âââââââââââââââ

â *OBTENER EL BOT AGROMOS SP*

ââââââââââââââââââââââââ

ââ±â»ï¸ _.instalarbot_

âââââââââââââââ

âââââââââââââââ

â *<CONVIERTETE EN SUB BOT/>*

ââââââââââââââââââââââââ 

â£ â±ð _.stop_

â£ â±ð _.jadibot_

â£ â±ð _.getcode_

âââââââââââââââ

â *<UNE UN BOT A TU GRUPO/>*

ââââââââââââââââââââââââ

â£ â±ð¤ _.join *link del grupo*_ 

â£ â±ð¤ _.bots_

âââââââââââââââ

âââââââââââââââ

â *<GESTION DE GRUPOS/>* 

ââââââââââââââââââââââââ 

â£ â±â´ _.admins *texto*_ 

â£ â±â´ _.aÃ±adir *numero*_ 

â£ â±â´ _.sacar @tag_

â£ â±â´ _.save *@tag + nombre de contacto*_

â£ â±â´ _.daradmin *@tag*_

â£ â±â´ _.quitaradmin *@tag*_

â£ â±â´ _.grupo *abrir / cerrar*_

â£ â±â´ _.enable welcome_

â£ â±â´ _.disable welcome_

â£ â±â´ _.enable antilink_

â£ â±â´ _.disable antilink_

â£ â±â´ _.enable antilink2_

â£ â±â´ _.disable antilink2_

â£ â±â´ _.enable delete_

â£ â±â´ _.disable  delete_ 

â£ â±â´ _.link_

â£ â±â´ _.notificar *texto*_

â£ â±â´ _.setname *Nuevo nombre del grupo*_

â£ â±â´ _.setdesc *Nueva descripciÃ³n del grupo*_

â£ â±â´ _.infogrupo_

â£ â±â´ _.invocar *texto*_

â£ â±â´ _.del *responder a un mensaje del bot*_

â£ â±â´ _.fantasmas_

â£ â±â´ _.banchat_

â£ â±â´ _.unbanchat_

âââââââââââââââ

âââââââââââââââ

â *<TOPS GRUPOS>*

ââââââââââââââââââââââââ 

â£ â±ðï¸ _.top10gays_

â£ â±ðï¸ _.toplind@s_

â£ â±ðï¸ _.topput@s_

â£ â±ðï¸ _.toppajer@s_

â£ â±ðï¸ _.topotakus_

âââââââââââââââ

âââââââââââââââ

â *<JUEGOS GRUPOS>*

ââââââââââââââââââââââââ 

â£ â±ð´ _.math *modo*_

â£ â±ð¥ _.ttt *name del la sala*_

â£ â±ð´ _.delttt *nombre del la sala*_

â£ â±ð¥ _.2gay *@tag*_

â£ â±ð´ _.gay *@tag / nombre*_

â£ â±ð¥ _.lesbi *@tag / nombre*_

â£ â±ð´ _.pajero *@tag / nombre*_

â£ â±ð¥ _.pajera *@tag / nombre*_

â£ â±ð´ _.puta *@tag / nombre*_

â£ â±ð¥ _.puto *@tag / nombre*_

â£ â±ð´ _.rata *@tag / nombre*_

â£ â±ð¥ _.manco *@tag / nombre*_

â£ â±ð´ _.manca *@tag / nombre*_

â£ â±ð¥ _.formarpareja_

â£ â±ð´ _.dado

â£ â±ð¥ _.formartrio_

â£ â±ð´ _.love *@tag / nombre*_

â£ â±ð¥ _.amigorandom_

â£ â±ð´ _.slot *cantidad*_

â£ â±ð¥ _.ppt *piedra / papel / tijera*_

heteroprostituta *@tag / nombre*_

â£ â±ð¥ _.prostituto *@tag / nombre*_

â£ â±ð¥ _.hetero *@tag / nombre*_

âââââââââââââââ

âââââââââââââââ

â *<DESCARGAS/>*

ââââââââââââââââââââââââ 

â£ â±ð¤ _.ytcomment_

â£ â±ð _.imagen *texto*_

â£ â±ð¥ _.ytsearch *texto*_

â£ â±ð _.dlaudio *link yt*_

â£ â±ð¤ _.dlvid *link yt*_

â£ â±ð _.ytmp3 *link yt*_

â£ â±ð¥ _.ytmp4 *link yt*_

â£ â±ð _.ytmp4.2 *link yt*_

â£ â±ð¤ _.play *titulo del audio*_

â£ â±ð _.play2 *titulo del video*_

â£ â±ð¥ _.play3 *titulo del audio/video*_

â£ â±ð _.play4 *titulo del video*_

â£ â±ð¤ _.letra *nombredelacanciÃ³n*_

â£ â±ð _.google *texto*_

â£ â±ð¥ _.googlef *texto*_

â£ â±ð _.wikipedia *palabra clave*_

â£ â±ð¤ _.pinterestvideo *link de pinterest*_

â£ â±ð _.tiktokaudio *link del tiktok*_

â£ â±ð¥ _.tiktok *link*_

â£ â±ð _.spotify *autor, cancion*_

â£ â±ð¤ _.acortar *link*_

â£ â±ð _.pinterest *texto*_

â£ â±ð¥ _.xnxx *link de xnxx*_

â£ â±ð _.xnxxsearch *texto*_

â£ â±ð¤ _.ssweb *link*_

â£ â±ð _.igstory *username*_

â£ â±ð¥ _.igstalk *username*_

â£ â±ð _.animeinfo *nombre del anime*_

â£ â±ð¤ _.twvid *link de video de twitter*_

âââââââââââââââ

âââââââââââââââ

â *<CREADORES/>*

ââââââââââââââââââââââââ 

â£ â±ð _.s_

â£ â±ð _.sticker_

â£ â±ð _.semoji_

â£ â±ð _.wasted_

â£ â±ð _.stonks_

â£ â±ð _.trash_

â£ â±ð _.rainbow_

â£ â±ð _.circle_

â£ â±ð _.trigger_

â£ â±ð _.stickermaker_

â£ â±ð _.attp *texto*_

â£ â±ð _.style *texto*_

â£ â±ð _.attp2 *texto*_

â£ â±ð _.stickerfilter_

â£ â±ð _.trigger *@tag*_

â£ â±ð _.mp3 *responde a un video*_

â£ â±ð _.img *responde a un sticker*_

â£ â±ð _.blur *responde a una imagen*_

â£ â±ð _.swm *link de imagen de google*_

â£ â±ð _.gif *responde a un sticker/video*_

â£ â±ð _.tovideo *responde a una nota de voz*_

âââââââââââââââ

âââââââââââââââ

â *<RANDOM|EXTRAS/>*

ââââââââââââââââââââââââ 

â£ â±ð _.doremon_

â£ â±â _.yeni_

â£ â±ð _.jiso_

â£ â±â _.pugb_

â£ â±ð _.rose_

â£ â±â _.fondogaming_

â£ â±ð _.fondoaesthetic_

â£ â±â _.fondomontaÃ±a_

â£ â±ð _.frase_

â£ â±â _.futbol_

â£ â±ð _.Messi_

â£ â±â _.animal_

â£ â±ð _.meme_

â£ â±â _.meme2_

â£ â±ð _.meme3_

â£ â±â _.cat_

â£ â±ð _.dog_

â£ â±â _.pikachu_

â£ â±ð _.waifu_

â£ â±â _.blackpink_

â£ â±ð _.reto_

â£ â±â _.verdad_

â£ â±ð _.imagenrandom_

â£ â±â _.neko_

â£ â±ð _.lolivid_

â£ â±ð _.iqtest_

â£ â±â _.kpopitzy_

â£ â±ð _.navidad_

â£ â±â _.loli_

â£ â±ð _.gawrgura_

â£ â±â _.miku_

â£ â±ð _.nyan_

â£ â±ð _.pat_

â£ â±â _.itachi_

â£ â±ð _.slap_

â£ â±â _.pat_

â£ â±ð _.perfil_

â£ â±â _.scan_

â£ â±ð _.kpop_

â£ â±â _.qr *texto*_

â£ â±ð _.afk *motivo*_

â£ â±â _.CristianoRonaldo_

â£ â±ð _.pregunta *pregunta*_

â£ â±â _.mention *texto*_

â£ â±ð _.spamchat *texto*_

â£ â±â _.traducir es *texto*_

â£ â±ð _.zodiac *AAAA MM DD*_

â£ â±â _.readmore *texto1| texto2*_

â£ â±ð _.calc *expresiÃ³n matemÃ¡tica*_ 

â£ â±â _.spamwa *numero|texto|cantidad*_

â£ â±ð _.readqr *responde a un cÃ³digo QR*_

â£ â±â _.anime *random / waifu / husbu /neko*_

â£ â±ð _.subirestado *texto / responder video, imagen o gif*_

âââââââââââââââ

âââââââââââââââ

â 

ââââââââââââââââââââââââ 

â 

ââââââââââââââââââââââââ 

â£ 

âââââââââââââââ

âââââââââââââââ

â *<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*

ââââââââââââââââââââââââ 

â Responde a un audio o nota de voz

ââââââââââââââââââââââââ 

â£ â±ð¤ _.bass_

â£ â±ð¤ _.deep_

â£ â±ð¤ _.earrape_

â£ â±ð¤ _.fast_

â£ â±ð¤ _.fat_

â£ â±ð¤ _.nightcore_

â£ â±ð¤ _.reverse_

â£ â±ð¤ _.robot_

â£ â±ð¤ _.slow_

â£ â±ð¤ _.smooth_

â£ â±ð¤ _.vibracion *cantidad*_

âââââââââââââââ

âââââââââââââââ

â *<CHAT ANONIMO/>*

ââââââââââââââââââââââââ 

â£ â±ð± _.start_

â£ â±ð± _.next_

â£ â±ð± _.leave_

âââââââââââââââ

âââââââââââââââ

â *<LOGOS PERSONALIZADOS/>*

ââââââââââââââââââââââââ 

â£ â±ð¨ _.logos_ (lista)

â£ â±ð¨ _.lolice_

â£ â±ð¨ _.simpcard_

â£ â±ð¨ _.hornycard_ 

â£ â±ð¨ _.lblackpink_

â£ â±ð¨ _.coffe *texto*_

â£ â±ð¨ _.tahta *texto*_

â£ â±ð¨ _.nulis *texto*_

â£ â±ð¨ _.nulis2 *texto*_

â£ â±ð¨ _.lolice *@tag*_

â£ â±ð¨ _.simpcard *@tag*_

â£ â±ð¨ _.logotaza *texto*_ 

â£ â±ð¨ _.logocesped *texto*_ 

â£ â±ð¨ _.logotaza2 *texto*_ 

â£ â±ð¨ _.flaming *texto*_ 

â£ â±ð¨ _.logofire *texto*_

â£ â±ð¨ _.logosky *texto*_

â£ â±ð¨ _.logocorazon *texto*_

â£ â±ð¨ _.logorandom *texto*_

â£ â±ð¨ _.neonfire *texto*_ 

â£ â±ð¨ _.technology *texto*_ 

â£ â±ð¨ _.playa *texto*_ 

â£ â±ð¨ _.lovemessages *texto*_

â£ â±ð¨ _.cementerio *texto*_

â£ â±ð¨ _.romanticdouble *texto*_

â£ â±ð¨ _.romanticmessages *texto*_

  El que lee esto es gay 

âââââââââââââââ

âââââââââââââââ

â *PROPIETARO DEL BOT*

â  *Dato solo el creador los puede usar o bots oficales*

ââââââââââââââââââââââââ 

â£ â±ð _.menucreador_

âââââââââââââââ

SapitoBot




â£


`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menusimple)$/i
handler.fail = null
module.exports = handler
