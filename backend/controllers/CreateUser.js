export default function CreateUser(req, res) {
        let response = req.body;
    
        User.find({userName: response.username},  async (user, err) => {
            if (user) {
                res.send('sorry that user already exists')
            }
    
            if (!user) {
                if (response.pswd === response.repeatPass) {
                    const hashedPassword = await bcrypt.hash(response.password, 10);
                    const addedUser = new User ({
                        firstName: response.firstName,
                        lastName: response.lastName,
                        userName: response.username,
                        password: hashedPassword,
                    });
    
                    console.log(addedUser);
    
                    addedUser.save((error, user) => {
                        if (user) {
                            console.log('user was added to the db');
                        } 
                        if (error) {
                            console.log(error);
                        }
                    })
    
                    newestUser = addedUser;
                    return newestUser;
                }          
            }
        })
}