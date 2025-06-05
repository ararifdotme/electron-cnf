/**
 * Get a config variable from the JSON file.
 * @param cnfName - The key of the config.
 * @param defaultValue - Default value to return if the key is not found.
 * @returns The value of the config key or the default value.
 */
export function getCnf(cnfName: string, defaultValue?: any): any;

/**
 * Get all config variables.
 * @returns An object containing all key-value config pairs.
 */
export function getAllCnf(): Record<string, any>;

/**
 * Set a config variable.
 * @param cnfName - The key to set.
 * @param cnfValue - The value to assign to the key.
 */
export function setCnf(cnfName: string, cnfValue: any): void;

/**
 * Set multiple config variables at once.
 * @param cnfObject - An object with multiple key-value pairs.
 */
export function setCnfMulti(cnfObject: Record<string, any>): void;

/**
 * Remove a config variable.
 * @param cnfName - The key to remove.
 */
export function unsetCnf(cnfName: string): void;

/**
 * Clear all configuration data.
 */
export function clearCnf(): void;
