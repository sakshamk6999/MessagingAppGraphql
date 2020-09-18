function sentBy(parent, args, context) {
    return context.prisma.message.findOne({ where: { id: parent.id } }).sentBy()
}

function sentTo(parent, args, context) {
    return context.prisma.message.findOne({ where: { id: parent.id } }).sentTo()
}

module.exports = {
    sentBy,
    sentTo
}