const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.user.create({data: {...args, password}})
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

function sendMessage(parent, args, context, info) {
    const userId = getUserId(context);

    const newMessage = context.prisma.message.create({
        data: {
            body: args.body,
            sentBy: { connect: {id: userId} },
            sentTo: { connect: {id: userId} },
        }
    })
    context.pubsub.publish("NEW_MESSAGE", newMessage)
    console.log("NEW_MESSAGE" + args.to)
    return newMessage;
}

module.exports = {
    signup,
    sendMessage
}