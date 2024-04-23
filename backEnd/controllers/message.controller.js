export const sendMessage = async(req,res)=>{
  try{
    const {message} = req.body;
    const {id: recieverId} = req.params.id;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants: {$all: [senderId, recieverId]}
    })

    if(!conversation){
        conversation = await Converstaion.create({
            participants: [senderId, recieverId]
        })
    }

    const newMessage = new Message({
        senderId,
        recieverId,
        message
    })

    if(newMessage){
        conversation.messages.push(newMessage._id)
    }
    res.status(201).json({newMessage})
  }catch(error){
    console.log("Internal server error")
    res.status(500).json({error:"Internal server error"})
  }
}