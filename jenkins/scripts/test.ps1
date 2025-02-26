Write-Host "Running React Tests..."

# Change to project directory
cd C:\Users\Pooja Rawat\.jenkins\workspace\react-test-app

# Run tests
npm test -- --watchAll=false

# Capture exit code (0 = success, 1 = failure)
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Tests failed!"
    exit 1  # Make Jenkins fail the job
} else {
    Write-Host "✅ Tests passed!"
}