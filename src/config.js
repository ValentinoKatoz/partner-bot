const config = {
  statusURL: 'https://srhpyqt94yxb.statuspage.io/api/v2/status.json',
  prefix: 'pb!',
  botGuildID: '784518019422486598',
  ownerID: '532936974969864192',
  ad: {
    desc: {
      min_length: 10,
      max_length: 255
    }
  },
  botMaintenance: false,
  deleteCommands: true,
  deleteTime: 30000,
  emojis: {
    delete: '689328295958806639'
  },
  permLevels: [
    {
      level: 0,
      name: 'User',
      check: () => {
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      }
    },
    {
      level: 4,
      name: 'Server Owner',
      check: (client, message) => {
        return new Promise((resolve, reject) => {
          resolve(message.member.id === message.guild.owner.id)
        })
      }
    },
    {
      level: 10,
      name: 'Bot Owner',
      check: (client, message) => {
        return new Promise((resolve, reject) => {
          resolve(message.member.id === config.ownerID)
        })
      }
    }
  ]
}

module.exports = config
