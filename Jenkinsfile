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
		
		stage('Integration test') {
			steps {
				nodejs(nodeJSInstallationName: 'nodejs') {
					if(env.BRANCH_NAME == 'develop') {
						sh 'serverless deploy --stage dev'
						sh 'serverless invoke --stage dev --function hello'	
					} else if(env.BRANCH_NAME == 'feature/*') {
						sh 'serverless deploy --stage int'
					} else if(env.BRANCH_NAME == 'master'){
						sh 'serverless deploy --stage production'
					}
				}				
			}
		}
	 
	 }
	
	
	 environment {
	 		AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
			AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
	 }

}
