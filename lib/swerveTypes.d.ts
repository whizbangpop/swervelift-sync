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
export type SwerveLogResponse: Object = {
	returnType: string;
	message: string;
}