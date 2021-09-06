//CONFIG DATA EXPLANATION - https://docs.petyxbron.cz/config/config-info
module.exports = {
    //Your bot data
    bot: {
        token: 'ODcxMzAzNjkyMTk0ODI4MzA5.YQZWzA.1XtWt4WIujyIicdsdVJnLHumx7c', //Your bot token - https://tinyurl.com/discordbot-token
        prefix: '=', //Your custom prefix of the bot, like "!" or "."
        status: '=status', //Custom activity/status text
        activity: 'LISTENING' //You can choose: PLAYING, LISTENING, WATCHING, COMPETING
    },

    //Your minecraft server data
    server: {
        name: 'MINECRAFT', //Your server name
        type: 'JAVA', //"java" or "bedrock"
        ip: 'play.indrasmp.xyz', //IP of your server - do not include port - e.g. "mc.hypixel.net"
        port: '25565', //PORT of your server - empty => default port (BE 19132, JA 25565)
        icon: 'https://th.bing.com/th/id/R.202e9da4aeb64f9de0eadce2de324a40?rik=VNaGwQlumdZnSA&riu=http%3a%2f%2faux2.iconspalace.com%2fuploads%2ftnt-icon-256.png&ehk=fdcPsJjQMlQ9XocosStNZp5rr0rlTfO1YBSA0dHnLRI%3d&risl=&pid=ImgRaw&r=0', //Link to icon - like "https://website.com/icon.png"
        vote: '' //Vote link - like "https://minecraftpocket-servers.com/server/80103/vote/"
    },

    //Basic code settings
    settings: {
        warns: true, //Show warns? - true or false (boolean)
        readyScan: true, //On bot's start, send to console server's basic info? - true or false (boolean)
        split: false, //Advanced - Extract only the version like "1.17" or "1.12" etc.
        statusCH: false, //Enable auto-changing status message - true or false (boolean)
        votingCH: false //Enable voting channel - true or false (boolean)
    },

    //Voting channel - https://docs.petyxbron.cz/config/config-info#voting-ch
    votingCH: {
        time: '30s', //Time for how long the cancel reaction should be deleted.
        reactions: {
            first: '👍', //First added reaction (the positive one)
            second: '👎', //Second added reacion (the negative one)
            cancel: '❌' //Third added reaction (cancel/remove button)
        },
        guild: {
            id: ''
        },
        channel: {
            id: ''
        }
    },

    //Auto changing status message
    statusCH: {
        time: '30s', //How long should the status always be updated? - like "3min", "20s" or "1min" etc.
        guild: {
            id: '',
        },
        channel: {
            id: '',
        }
    },
    
    //Embeds settings
    embeds: {
        colors: {
            normal: '',  //Main/succesful color of embeds - choose HEX color here: https://htmlcolorcodes.com
            error: '', //Error/unsuccesful color of embeds - choose HEX color here: https://htmlcolorcodes.com
        }
    },

    //Commands aliases
    commands: {
        status: [
            'info',
            'server'
        ],
        help: [
            'commands',
            'menu'
        ],
        test: [
            'try',
            'testing'
        ],
        ip: [
            'ip-address',
            'address',
            'connect'
        ],
        list: [
            'players'
        ],
        vote: [

        ],
        version: [
            'v'
        ],
        poll: [
            'voting'
        ],
        lockdown: [
            'lock'
        ],
        message: [
            'announce',
            'announcement'
        ]
    }
};
//CONFIG DATA EXPLANATION - https://docs.petyxbron.cz/config/config-info
