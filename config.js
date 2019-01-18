var config = {};
config.maxBots = 50;//Default=50. If using VPS, max=300 or lag. If not using VPS, max=100 or lag.
config.serverPort = process.env.PORT || 3000;//Default=8081
config.proxies = "proxy.txt";//Default=proxy.txt
config.chatMsg = "bit.ly/mkbots";//Default=Free Snow at www.olaf4snow. com

config.botSkin = "[MK]";//Default=[Olaf]
config.botName = "bit.ly/mkbots";//Default=4snow.com

module.exports = config;
