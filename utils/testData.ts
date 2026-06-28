/** Test user credentials for saucedemo.com login scenarios. */
export const users = {
  standard: { username: 'standard_user', password: 'secret_sauce' },
  locked: { username: 'locked_out_user', password: 'secret_sauce' },
  problem: { username: 'problem_user', password: 'secret_sauce' },
  glitch: { username: 'performance_glitch_user', password: 'secret_sauce' },
};

/** Negative login scenarios, each paired with the expected error message. */
export const invalidLoginCases = [
  { username: 'locked_out_user', password: 'secret_sauce', expectedError: 'locked out' },
  { username: 'invalid_user', password: 'wrong_password', expectedError: 'do not match' },
  { username: '', password: 'secret_sauce', expectedError: 'Username is required' },
  { username: 'standard_user', password: '', expectedError: 'Password is required' },
];