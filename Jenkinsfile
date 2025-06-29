pipeline {
    agent any

    stages {
        stage('Checkout the code') {
            steps {
                echo 'checkout code from git repo'
                checkout changelog: false, poll: false, scm: scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/karthikautomationtester/cucumber-js.git']])
            }
        }
         stage('Install Dependencies') {
            steps {
                echo 'installing dependencies...'
                sh 'npm install'
            }
        }
         stage('Run tests') {
            steps {
                echo 'running the tests'
                sh 'npm run test'
            }
        }
         stage('Publish reports') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: 'reports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}
