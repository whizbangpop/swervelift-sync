import { SwerveLogResponse } from '../swerveTypes';
import createLogFile from './fileHandler';

const logFile: SwerveLogResponse = createLogFile('');
if (logFile.returnType === 'erorr') { console.log('There was an error.')}

