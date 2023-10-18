pipeline {
    agent any
    // tools (nodejs "nodejs")
    stages {
        stage('Clone Repository'){
            steps {
                git branch: 'main', url: 'https://github.com/najuBhadarka/pregnancyApp.git'
            }
        }
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        stage('Start Application'){
            input {
                message "Should we continue?"
                ok "Yes, we should."
                submitter "najuBhadarka"
            }
            steps {
                sh 'npm start'
            }
        }
    }
}