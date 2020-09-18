async function users(parent, args, context, info) {
    console.log("in it");
    const users = await context.prisma.user.findMany();
    return users;
}

module.exports = {
    users,
}