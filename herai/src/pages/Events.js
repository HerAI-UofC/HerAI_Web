import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import * as AWS from 'aws-sdk';
import TableComponent from '../components/table';

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'dynamodb.us-east-1.amazonaws.com',
  accessKeyId: 'AKIAZJ4I4ULXZ3V3C2WF',
  secretAccessKey: '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'
});

const onRead = () => {
  return new Promise((resolve, reject) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: 'Events_Test'
    };

    docClient.scan(params, (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log("ITEMS")
        console.log(data.Items);
        resolve(data.Items);
      }
    });
  });
};

const Events = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await onRead();
        setItems(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // useEffect will run once on component mount

  const videoSrc = 'https://test-grab-bucket.s3.amazonaws.com/sample-5s.mp4';
  const pdfSrc = 'https://test-grab-bucket.s3.amazonaws.com/sample.pdf';

  return (
    <div>
      <h1>EVENTS</h1>
      <video width="320" height="240" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <iframe src={pdfSrc} width="90%" height="500px" />
      <div>
        <h1>Events Table </h1>
        <TableComponent data={items} />
      </div>
    </div>
  );
};

export default Events;