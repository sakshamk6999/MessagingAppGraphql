const { APP_SECRET, getUserId } = require('../utils')
function newMessageSubscribe(parent, args, context, info) {
    console.log(context)
    // const userId = getUserId(context)
    return context.pubsub.asyncIterator("NEW_MESSAGE")
}

const newMessage = {
    subscribe: newMessageSubscribe,
    resolve: payload => {
        return payload
    },
}

// function newMessage(parent, args, context, info){
//     const userId = getUserId(context)
//     console.log("NEW_MESSAGE" + userId)
//     return {
//         subscribe: newMessageSubscribe,
//         resolve: payload => {
//             return payload
//         },
//     }
// }

module.exports = {
    newMessage
}