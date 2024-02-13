
properties([
    parameters([
        string(name: 'PROJECT_NAME', defaultValue: '', description: 'TestAutomationExcerciseCypress')
    ])
])

pipeline {
    agent any

    stages {
        stage('Test Project') {
            steps {
                script {
                    echo "Running Tests for Project: ${params.PROJECT_NAME}"
                    // Add commands or scripts to run tests for the specified project
                }
            }
        }

        stage('Common Tests') {
            steps {
                script {
                    echo 'Running Common Tests'
                    // Add commands or scripts for common tests
                }
            }
        }
    }

    post {
        success {
            echo 'All Tests Passed!'
        }
        failure {
            echo 'Tests Failed!'
        }
    }
}


// multiple project and features 
properties([
    parameters([
        string(name: 'PROJECT_NAMES', defaultValue: 'AutomationExcerciseCypress, project2, project3', description: 'Comma-separated list of project names to test'),
        string(name: 'FEATURE_NAMES', defaultValue: '', description: 'Comma-separated list of feature names to test')
    ])
])

// multiple project and features 
//properties([
    parameters([
        string(name: 'PROJECT_NAMES', defaultValue: '', description: 'Comma-separated list of project names to test'),
        string(name: 'FEATURE_NAMES', defaultValue: '', description: 'Comma-separated list of feature names to test')
    ])
//])

pipeline {
    agent any

    stages {
        stage('Test Projects') {
            steps {
                script {
                    def projects = params.PROJECT_NAMES.split(',')
                    echo "Running Tests for Projects: ${projects.join(', ')}"
                    
                    // Loop through each project and run tests
                    for (def project in projects) {
                        echo "Running Tests for Project: ${project}"
                        // Add commands or scripts to run tests for the specified project
                    }
                }
            }
        }

        stage('Test Features') {
            steps {
                script {
                    def features = params.FEATURE_NAMES.split(',')
                    echo "Running Tests for Features: ${features.join(', ')}"
                    
                    // Loop through each feature and run tests
                    for (def feature in features) {
                        echo "Running Tests for Feature: ${feature}"
                        // Add commands or scripts to run tests for the specified feature
                    }
                }
            }
        }

        stage('Common Tests') {
            steps {
                script {
                    echo 'Running Common Tests'
                    // Add commands or scripts for common tests
                }
            }

        }
    }

    post {
        success {
            echo 'All Tests Passed!'
        }
        failure {
            echo 'Tests Failed!'
        }
    }
}
