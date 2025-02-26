pipeline { 
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                powershell '.\\jenkins\\scripts\\test.ps1'
            }
        }
        // stage('Deliver') { 
        //     steps {
        //         bat 'jenkins\\scripts\\deliver.bat' 
        //         input message: 'Finished using the website? (Click "Proceed" to continue)' 
        //         bat 'jenkins\\scripts\\kill.bat' 
        //     }
        // }
    }
}
