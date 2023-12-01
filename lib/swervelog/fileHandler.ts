import * as fs from 'fs';
import * as path from'path';

import { SwerveLogResponse } from '../swerveTypes';

/**
 * Creates a log file using the specified path
 * @param {string} logFile (required) 
 * 
 * @returns {string} filePath
 */
export function createLogFile(logFile: string) : SwerveLogResponse {
	// Makes sure that a somewhat valid filepath exists, i.e. its not just a blank string
	if (!logFile || (logFile.length < 2)) {
		const error: SwerveLogResponse = {
			returnType: 'error',
			message: 'InvalidPathError'
		};
		return error;
	};

	// Makes sure a log file with the same path/name doesn't exist
	if (checkForLogFile(logFile)) {
		const exit: SwerveLogResponse = {
			returnType: 'exit',
			message: 'FileExists'
		};
		return exit;
	};

	fs.writeFile(logFile, "SwerveLift Generated File. Do not modify or delete.\n\n", (err) => {
		if (err) throw err;
	});
	
	const msg: SwerveLogResponse = {
		message: 'OperationSuccessful',
		returnType: 'info'
	};

	return msg;
};

export function checkForLogFile(logFile: string): SwerveLogResponse {
	let exists = false;
	
	if (fs.existsSync(logFile)) exists = true;

	const msg: SwerveLogResponse = {
		message: exists,
		returnType: 'info'
	};

	return msg;
}