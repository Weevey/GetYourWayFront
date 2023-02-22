pipeline {
    agent any
    stages {
        stage('Install dependencies') {
           steps {
                sh 'npm install'
            }
        } 
        stage('Fix dependencies') {
            steps {
                sh 'npm audit fix'
            }
        }
        stage('Test application') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build application') {
            steps {
                sh 'npm run build'
            }
        } 
        stage('Deploy') {
            steps {
                sh 'serve -s build'
            }
        }
    }
}