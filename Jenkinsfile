pipeline{
    agent any

    triggers {
        gitHubPush()
    }
    stages{
        stage('Pull Code From Repo'){
            when{
                branch 'master'
            }
            steps{
                echo "pull the fu*king code from repo first"
            }
            // git branch : 'master', url : 'url of repo, if manual trigger'
        }

        stage('create docker images from the DockerfIle in frontend and backend folders parallely'){
            parallel{
                stage('build frontend image'){
                    steps{
                        echo "building frontend image"
                        sh 'docker build -t prass6naa/trial-frontend:latest ./frontend'
                    }
                }
                stage('build backend image'){
                    steps{
                        echo 'build backend image'
                        sh 'docker build -t prass6naa/trial-backend:latest ./backend'
                    }
                }
            }
        }

        stage('Log in to dockerHub')
        {
            steps{
                echo 'Authenticating with docker hub'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
                usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) 
                {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('pushing docker images to docker hub')
        {
            parallel{
                stage('push frontend image'){
                    echo 'pushing frontend image to docker hub'
                    sh 'sudo /usr/local/bin/docker push prass6naa/trial-frontend'
                }
                stage('push backend image'){
                    echo 'pushing backend image to docker hub'
                    sh 'sudo /usr/local/bin/docker push prass6naa/trial-backend'
                }
            }
        }
    }
}