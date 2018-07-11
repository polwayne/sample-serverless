pipeline {
	agent any	 
	
	stages {
		stage('Unit test') {
			steps {				
				nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'serverless --help' // to ensure it is installed
                }
			}
		}			

		stage('Deploy dev branch') {
			when {branch "develop"}
			steps {
				nodejs(nodeJSInstallationName: 'nodejs') {
						sh 'serverless deploy --stage dev'
				}
			}
		}

		stage('Deploy feature branch') {
			when {branch "feature/*"}
			steps {
				nodejs(nodeJSInstallationName: 'nodejs') {
						sh 'serverless deploy --stage int'
				}
			}
		}

		stage('Deploy master branch') {
			when {branch "master"}
			steps {
				nodejs(nodeJSInstallationName: 'nodejs') {
						sh 'serverless deploy --stage int'
				}
			}
		}
	 
	 }
	
	
	 environment {
	 		AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
			AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
	 }

}
