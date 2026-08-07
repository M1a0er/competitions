@echo off
cd /d C:\Users\miaoer\Desktop\web_competition
"C:\Program Files\Git\bin\git.exe" add .
"C:\Program Files\Git\bin\git.exe" commit -m "更新: %date% %time%"
"C:\Program Files\Git\bin\git.exe" push origin main
echo ========== 部署完成 ==========
pause
