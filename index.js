const { Storage } = require("@google-cloud/storage");

const storage = new Storage({ keyFilename: "./firebaseKey.json", apiEndpoint: "http://127.0.0.1:9199/" });

const bucket = storage.bucket("gaizevideofunctions.appspot.com");

bucket.upload("./index.js", {
  contentType: "application/json",
  destination: "index.js",
  metadata: {
    metadata: {
      firebaseStorageDownloadTokens: 89437237489,
    },
  },
}).then((data) => {
  console.log(data[0].publicUrl());

  let file = "index.js";

  bucket.file(file).download({
    destination: "./uploads/" + file
  });
});