require('dotenv').config()
const fs = require('fs')
const AWS = require('aws-sdk')

const ID = 'AKIARWZAJSL4NVJGUYPF'
const SECRET = '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'
const BUCKET_NAME = 'ecofreshbucket'
const REGION = 'ca-central-1'

const s3 = new AWS.S3({
   accessKeyId: ID,
   secretAccessKey: SECRET
})

//upload file to s3
function uploadImage(file) {
    const fileStream = fs.createReadStream(file.path)

    const params = {
        Bucket: BUCKET_NAME,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(params).promise()
}
exports.uploadImage = uploadImage;