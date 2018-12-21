

const textData = [
{ 
  text: "Welcome to the Blockchain Clicker app. This app is designed to show, those with some basic understanding of Blockchains, how mining works. Continually hit the mine button to start playing and learning."
},
{
  text: "Blockchains allows the transmission of money without the need for traditional banking networks, it allows a means to store data immutably and transparently."
},
{
  text: "A Blockchain stores the movement of this money and data as transactions, just like the block above. Imagine the way you might store transactions in a ledger, allowing a way of checking who owes each other money."
},
{
  text: "Mining a block, just like in a real blockchain, can potentially reward you with an amount of cryptocurrency. You can spend this Coin in the shop to increase your processing power."
},
{
  text: "Once you have purchased some processing power, hitting the mine button will start automatically mining at a slow rate. This will get faster the more power you have."
},
{
  text: "You can also keep hitting the mine button to increase the nonce, manually adding to your processing power."
}, 
{
  text: "As the number of blocks mined increases the difficulty to process each block also increases. This keeps the time to mine a block in Bitcoin at around 10mins. The difficulty is re-calculated after 2016 blocks have been mined."
}, 
{
  text: "Blockchains can be used in lots of ways. The blockchain monitors Bitcoin/money movements from user to user but can monitor transfer of other data."
},
{
  text: "A block can be split into the block header and the block body. The block header is hashed which creates a unique hash for that block. Each time the nonce is incremented the hash also changes."
},
{
  text: "The block is validated when the hash number is below an agreed upon difficulty number. Multiple users will be trying to successfully hash the next block and the first to do so receives the reward."
},
{
  text: "The prevHash refers to the previous blocks hash which creates the chain. Each block will be linked back to the first genesis block"
},
{
  text: "The more miners there are the harder the difficulty. The act of mining requires a lot of energy but this stops anyone from taking control of the blockchain, assuming they have less than 51% of the global processing power."
},
{
  text: "All transactions on the Bitcoin blockchain are publically available creating transparent transactions. Bitcoins can only be created from mining rewards. This controls the global number of Bitcoins"
}
]



export default textData;