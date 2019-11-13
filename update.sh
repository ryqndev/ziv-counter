#!/bin/bash

echo "Running script to generate date string for current time..."
npm run increment

echo "Pushing new files to production..."
npm run deploy