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

![alt text](https://github.com/rishavmehra/AWS-Serverless/blob/main/serverless%20.png)

