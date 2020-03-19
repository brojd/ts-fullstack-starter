module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@shared(.*)$': '<rootDir>/../shared/src/$1',
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy'
  }
};
