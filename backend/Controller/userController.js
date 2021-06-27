var UserData = require('../../backend/userdata')
var RainfallData = require('../../backend/piedata')


const userController = {

   userdata: async (req, res) => {
      setTimeout(() => {
         const myFunc = async () => {
            const data = await UserData
            return res.json({ data: data })
         }
         myFunc()
      }, 8000)
   },

   pieinfo: async (req, res) => {
      setTimeout(() => {
         const myFunc = async () => {
            const data = await RainfallData
            return res.json({ data: data })
         }
         myFunc()
      }, 8000)
   }

}

module.exports = userController