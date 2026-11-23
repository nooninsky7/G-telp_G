@echo off
chcp 65001 > nul
echo ========================================================
echo   G-TELP 실전 문제 앱 GitHub 원클릭 배포 도우미
echo ========================================================
echo.

set /p GITHUB_USER="내 GitHub 아이디(사용자명)를 입력하세요: "
if "%GITHUB_USER%"=="" (
    echo 아이디가 입력되지 않았습니다. 종료합니다.
    pause
    exit /b
)

set REPO_NAME=G-telp_G
echo.
echo [1/3] Git 상태 확인 및 커밋 준비...
git add .
git commit -m "Update: G-TELP web app files" > nul 2>&1

echo [2/3] 원격 저장소 연결 중: https://github.com/%GITHUB_USER%/%REPO_NAME%.git
git remote remove origin > nul 2>&1
git remote add origin https://github.com/%GITHUB_USER%/%REPO_NAME%.git
git branch -M main

echo [3/3] GitHub로 업로드(Push) 진행 중...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   성공적으로 GitHub에 업로드되었습니다!
    echo ========================================================
    echo.
    echo 이제 GitHub 저장소 페이지의:
    echo 1. [Settings] 클릭
    echo 2. 왼쪽 메뉴 [Pages] 클릭
    echo 3. Branch를 'main'으로 선택 후 [Save] 클릭
    echo.
    echo 잠시 후 아래 주소로 접속하실 수 있습니다:
    echo https://%GITHUB_USER%.github.io/%REPO_NAME%/
    echo ========================================================
) else (
    echo.
    echo [주의] GitHub 저장소가 아직 생성되지 않았거나 권한이 필요합니다.
    echo 1. 먼저 https://github.com/new 에서 'G-telp_G' 이름으로 저장소를 만드셨는지 확인해주세요.
    echo 2. 브라우저에서 github_setup.html 파일을 열어 가이드를 확인해보세요.
)

echo.
pause
