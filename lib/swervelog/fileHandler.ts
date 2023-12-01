import 'fs';
import 'path';

import { SwerveLogResponse } from '../swerveTypes';
import { error } from 'console';

/**
 * Creates a log file using the specified path
 * @param {string} logFile (required) 
 * 
 * @returns {string} filePath
 */
export default function createLogFile(logFile: string) : Object {
	if (!logFile || (logFile.length < 2)) {
		const error: SwerveLogResponse = {
			returnType: 'error',
			message: 'InvalidPathError'
		}
	}

	return error;
}