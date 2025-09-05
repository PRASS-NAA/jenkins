pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Pull Code From Repo') {
            when {
                branch 'master'
            }
            steps {
                echo "pull the fu*king code from repo first"
                // git branch : 'master', url : 'url of repo, if manual trigger'
            }
        }

        stage('Create docker images from the Dockerfile in frontend and backend folders parallely') {
            parallel {
                stage('Build frontend image') {
                    steps {
                        echo "building frontend image"
                        sh 'docker build -t prass6naa/trial-frontend:latest ./frontend'
                    }
                }
                stage('Build backend image') {
                    steps {
                        echo 'build backend image'
                        sh 'docker build -t prass6naa/trial-backend:latest ./backend'
                    }
                }
            }
        }

        stage('Log in to dockerHub') {
            steps {
                echo 'Authenticating with docker hub'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push docker images to docker hub') {
            parallel {
                stage('Push frontend image') {
                    steps {
                        echo 'pushing frontend image to docker hub'
                        sh 'sudo /usr/local/bin/docker push prass6naa/trial-frontend'
                    }
                }
                stage('Push backend image') {
                    steps {
                        echo 'pushing backend image to docker hub'
                        sh 'sudo /usr/local/bin/docker push prass6naa/trial-backend'
                    }
                }
            }
        }
    }
}
