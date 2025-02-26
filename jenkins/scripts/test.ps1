Write-Host "Installing dependencies..."
cd "C:\Users\Pooja Rawat\.jenkins\workspace\react-test-app"
npm install

Write-Host "Running React Tests..."
npx react-scripts test --watchAll=false --passWithNoTests

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Tests failed!"
    exit 1
} else {
    Write-Host "✅ Tests passed!"
}