'use strict';
const chatbot =require('../ChatBot/ChatBot');

// for general routes
module.exports= app =>{
    
     
    //app.get('/',(req,res)=>{res.send({'hello':'Anubhav jain , I am coming broo'});});
    
//for text route 
app.post('/api/df_text_query',async (req,res)=>{
    
    
    let responses = await chatbot.textQuery(req.body.text,req.body.userID,req.body.parameters);
        
        res.send(responses[0].queryResult);

    });


    
// for event route 
app.post('/api/df_event_query',async (req,res)=>{
        
       let responses = await chatbot.eventQuery(req.body.event,req.body.userID,req.body.parameters);
        
        res.send(responses[0].queryResult);
    });
    

    
    
}