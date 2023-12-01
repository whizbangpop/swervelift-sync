/**
 * 
 */
export type LogMessage = {
	type: string;
	message: string;
	useWebhook: boolean;
} 

/**
 * 
 */
export type SwerveLogResponse = {
	returnType: string;
	message: string;
}