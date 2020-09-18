function messages(parent, args, context) {
    return context.prisma.user.findOne({ where: { id: parent.id } }).messages()
}

module.exports = {
    messages,
}