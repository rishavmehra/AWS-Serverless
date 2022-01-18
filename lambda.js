const querystring= require('querystring');
const AWS=require('aws-sdk')

var ses = new AWS.SES();


exports.handler=function(event,context,callback){
    const params = querystring.parse(event.body);

    var emailParams = {
        Source:"XXXX@gmail.com",
        Destination:{
            ToAddresses:["XXXX@gmail.com"]
        },
        Message:{
            Subject:{
                Data:"YOu Got new Email from SES"
            },
            Body:{
                Text:{
                    Data:"Hey Sir you New customer"
                }
            }
        }

    }

    ses.sendEmail(emailParams,function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
    const response={
        statusCode:200,
        header:{'Access-Control-Allow-Origin':'*'},
        body:JSON.stringify('From Submitted by'+ params['names']+'and we will get back ASAP!')
    };
    return response;
    callback(null,response)
};