const data=[
    {
        userId:1,
        name:"tus",
        age:23
    },
    {
        userId:2,
        name:"abc",
        age:24
    },
    {
        userId:3,
        name:"def",
        age:25
    },
    {
        userId:4,
        name:"vyx",
        age:22
    },
    {
        userId:5,
        name:"aaa",
        age:27
    }

];

function getAllUsers(req,res){
    res.send(
        [
            {
                userId:1,
                name:"tus",
                age:23
            },
            {
                userId:2,
                name:"abc",
                age:24
            },
            {
                userId:3,
                name:"def",
                age:24
            },
            {
                userId:4,
                name:"vyx",
                age:23
            }

        ]
    )

}

function getUserById(req,res){
    const userId= req.params.userId;
    console.log("userID: ",userId);
    res.send({
        userId,
        
    });
}

// v1/getUserByNameAndAge?name=Name&age=20
function getUserByNameAndAge(req,res){
    // const {name,age}=req.query;
    const queryobject = req.query;
    console.log("queryobject ", queryobject );
    console.log("name ",queryobject.name);
    console.log("age ",queryobject.age);
//     res.send({
//         name,age
//     });

 data.forEach((element)=>{
    if(element.name==queryobject.name ||element.age==queryobject.age){
        res.send(
            (element)
        )
    }

 })
}

function createUser(req,res){
    const {username,password,age}=req.body;
    res.send({
        username,
        password,
        age
    }
    )
}
let listUser=[];
function createManyUser(req,res){
    const { data }=req.body; /// { "data": [..] } data này là dữ liệu từ json trả về
    // req.body.data
    listUser=data.concat(listUser);

    res.send(
        listUser
);

}

module.exports={
    // getAllUsers //khi key = value thì chỉ cần ghi getAllUsers, nếu muốn gán thì mới cần truyền vào
    getUserById,
    getUserByNameAndAge,
    users: getAllUsers,
    createUser,
    createManyUser
}