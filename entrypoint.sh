#!/bin/bash

args=($@)
argcount="{#args[@]}"
echo "arg-count=$argcount" >> $GITHUB_OUTPUT
