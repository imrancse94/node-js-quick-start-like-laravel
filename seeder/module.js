module.exports = async () => {
    const moduleSchema = require('./../app/Models/modules');
    return await moduleSchema.create({
        name: "Access Control",
        children: [
            {
                name: "User Management",
                children: [
                    {
                        name: "User List",
                        permission: "user-list",
                        isIndex: true
                    },
                    {
                        name: "User Add",
                        permission: "user-add",
                        isIndex: false
                    },
                    {
                        name: "User Edit",
                        permission: "user-edit",
                        isIndex: false
                    },
                    {
                        name: "User Delete",
                        permission: "user-delete",
                        isIndex: false
                    }
                ]
            },
            {
                name: "Role Management",
                children: [
                    {
                        name: "Role List",
                        permission: "role-list",
                        isIndex: true
                    },
                    {
                        name: "Role Add",
                        permission: "role-add",
                        isIndex: false
                    },
                    {
                        name: "Role Edit",
                        permission: "role-edit",
                        isIndex: false
                    },
                    {
                        name: "Role Delete",
                        permission: "role-delete",
                        isIndex: false
                    }
                ]
            }
        ],
        updated_at: new Date(),
        created_at: new Date()
    })
}
