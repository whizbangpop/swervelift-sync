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
export interface SwerveLogResponse extends Object {
	returnType: string;
	message: any;
}