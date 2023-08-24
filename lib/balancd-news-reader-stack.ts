import { CfnOutput, Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Function as LambdaFunction, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as path from "path";

export class BalancdNewsReaderStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new LambdaFunction(this, "BalancdNewsReaderFunction", {
      runtime: Runtime.NODEJS_18_X,
        code: Code.fromAsset(path.join(__dirname, "..","dist","src","services")),
        handler: "index.handler",
    });
  }
}
