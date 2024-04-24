#!/bin/bash
echo "============== 开始执行项目发布 =================="

SUB_PROJECT=ir

# 根据环境，将打好的包发到不同的目标服务器上
case $Environment in
"72")
       echo "Environment is 72..."
       ssh  192.168.34.203 "rm -rf /app/web/$SUB_PROJECT/* /app/web/$SUB_PROJECT/.next"
       ssh  192.168.34.203 "mkdir -p /app/web/$SUB_PROJECT/"
       rsync -avz --delete-after --progress --exclude ".git" --include=".*" ./  192.168.34.203:/app/web/$SUB_PROJECT/
       ssh  192.168.34.203 "cd /app/web/$SUB_PROJECT/ && npm install && npm run start"
       ;;
"SH")
       echo "Environment is SH..."
       ssh  172.26.64.81 "rm -rf /app/web/$SUB_PROJECT/* /app/web/$SUB_PROJECT/.next"
       ssh  172.26.64.81 "mkdir -p /app/web/$SUB_PROJECT/"
       rsync -avz --delete-after --progress --exclude ".git" --include=".*" ./  172.26.64.81:/app/web/$SUB_PROJECT/
       ssh  172.26.64.81 "cd /app/web/$SUB_PROJECT/ && npm install && npm run start"
       ;;
"prod")
       ssh  172.24.64.81 "rm -rf /app/web/$SUB_PROJECT/* /app/web/$SUB_PROJECT/.next"
       ssh  172.24.64.81 "mkdir -p /app/web/$SUB_PROJECT/"
       rsync -avz --delete-after --progress --exclude ".git" --include=".*" ./  172.24.64.81:/app/web/$SUB_PROJECT/
       ssh  172.24.64.81 "cd /app/web/$SUB_PROJECT/ && npm install && npm run start"

       ssh  172.24.64.82 "rm -rf /app/web/$SUB_PROJECT/* /app/web/$SUB_PROJECT/.next"
       ssh  172.24.64.82 "mkdir -p /app/web/$SUB_PROJECT/"
       rsync -avz --delete-after --progress --exclude ".git" --include=".*" ./  172.24.64.82:/app/web/$SUB_PROJECT/
       ssh  172.24.64.82 "cd /app/web/$SUB_PROJECT/ && npm install && npm run start"
       ;;
esac
