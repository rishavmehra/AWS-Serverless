# AWS-Serverless

## Serverless:
`Serverless architecture means that it is server-management-less. That is, the vendor manages everything, and you don't need to spend time figuring out how to set up everything. Payment for the used server space only. Developers pay only for the space they use.` [Click Here for More](https://www.serverless.com/framework/docs/providers/aws/guide/intro)

---

### Technologies used:
*AWS S3, AWS API Gateway, AWS Lambda, AWS SES*

### Working of AWS Serverless Technologies  in this project:

- AWS S3: This is where your static website is hosted and where all of your HTML, CSS, JavaScript and assets will live.

- AWS API Gateway: Your S3 website will make an API call when a form is processed and when this call is made to API Gateway, it will trigger a Lambda function.

- AWS Lambda: The Lambda function can do whatever you want but in our case, it simply sends the data from the form to an email address using AWS Simple Email Service (SES)

- AWS SES: Create Identity using your personal/company E-mail address.

![](https://github.com/rishavmehra/AWS-Serverless/blob/main/images/serverless%20.png)

---

> Create a new Bucket in S3 same name as a domain name of Your Site. After Creating a bucket put your HTML, JS, CSS into this bucket. After all of these you have to enable the Static Web permission under properties tab. Now, Enable public access.

use this docs for aws static website hosting S3 [Rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html#step4-add-bucket-policy-make-content-public)

```{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
```
![](https://github.com/rishavmehra/AWS-Serverless/blob/main/images/S3.png)

---

> Make new lambda function *Author from scratch *  using node.js

~~~
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
~~~

![](https://github.com/rishavmehra/AWS-Serverless/blob/main/images/lambda.png)

Now Create API Gateway use REST API, New API. Set API Name now create resource under resource click on Action Make Create Method (GET,POST) final step deploy API under Action button. <br />
*Note*: After Every small with any service don't forgot to deploy API.

![](https://github.com/rishavmehra/AWS-Serverless/blob/main/images/API.png)

### Test
![](https://github.com/rishavmehra/AWS-Serverless/blob/main/images/email.png)


