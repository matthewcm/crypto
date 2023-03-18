export default {
	projects: [
		{
			testEnvironment: 'jsdom',
			displayName: 'client',
			setupFilesAfterEnv: ['<rootDir>/client/jest.setup.tsx'],
			testMatch: ['<rootDir>/client/**/*.test.*'],
			transform: {
				'^.+\\.tsx?$': 'ts-jest',
			},
			moduleNameMapper: {
				'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
				'\\.svg': '<rootDir>/client/src/__mocks__/svg.tsx',
			},
		},
		{
			transform: {
				'^.+\\.tsx?$': 'ts-jest',
			},
			testEnvironment: 'node',
			displayName: 'server',
			testMatch: ['<rootDir>/server/**/*.test.*'],
		},
	],
};
