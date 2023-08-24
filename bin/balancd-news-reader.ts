#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BalancdNewsReaderStack } from '../lib/balancd-news-reader-stack';

const app = new cdk.App();
new BalancdNewsReaderStack(app, 'BalancdNewsReaderStack');
