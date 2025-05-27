import type {Config} from 'jest'

const config: Config = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            useESM: true,
            tsconfig: '<rootDir>/tsconfig.json',
        }]
    },
    moduleNameMapper: { "\\.(css)$": "<rootDir>/src/css-mock.js" }
}

export default config