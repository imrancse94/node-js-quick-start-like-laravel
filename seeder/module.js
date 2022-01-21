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
                        is_index: true
                    },
                    {
                        name: "User Add",
                        permission: "user-add",
                        is_index: false
                    },
                    {
                        name: "User Edit",
                        permission: "user-edit",
                        is_index: false
                    },
                    {
                        name: "User Delete",
                        permission: "user-delete",
                        is_index: false
                    }
                ]
            },
            {
                name: "Role Management",
                children: [
                    {
                        name: "Role List",
                        permission: "role-list",
                        is_index: true
                    },
                    {
                        name: "Role Add",
                        permission: "role-add",
                        is_index: false
                    },
                    {
                        name: "Role Edit",
                        permission: "role-edit",
                        is_index: false
                    },
                    {
                        name: "Role Delete",
                        permission: "role-delete",
                        is_index: false
                    }
                ]
            },
            {
                name: "Usergroup Management",
                children: [
                    {
                        name: "Usergroup List",
                        permission: "usergroup-list",
                        is_index: true
                    },
                    {
                        name: "Usergroup Add",
                        permission: "usergroup-add",
                        is_index: false
                    },
                    {
                        name: "Usergroup Edit",
                        permission: "usergroup-edit",
                        is_index: false
                    },
                    {
                        name: "Usergroup Delete",
                        permission: "usergroup-delete",
                        is_index: false
                    }
                ]
            }
        ],
        updated_at: new Date(),
        created_at: new Date()
    })
}
