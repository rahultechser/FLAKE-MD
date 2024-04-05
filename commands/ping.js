/**
========================================================
    𝑅𝛥𝛨𝑈𝐿-𝛭𝐷 𝐵𝛩𝑇
========================================================
 Copyright (C) 2023.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : RAHUL-MD                                                                    
 * @author : Tahul121 <https://github.com/Tahul121>   
 * @description : RAHUL-MD ,A Multi-functional whatsapp bot.       
 * @version 1.0.1                                                                                             
 ========================================================
 **/
 
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```ᴘɪɴɢ ᴋɪɴɢ-ᴍᴅ..```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '_𝙥𝙤𝙣𝙜_\n *' + (final - inital) + ' ms* ', edit: key});
    }
);
