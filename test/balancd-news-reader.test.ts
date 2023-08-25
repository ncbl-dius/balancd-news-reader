import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as BalancdNewsReader from '../lib/balancd-news-reader-stack';

test('SQS Queue and SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new BalancdNewsReader.BalancdNewsReaderStack(app, 'MyTestStack');
  // THEN

  const template = Template.fromStack(stack);
});
