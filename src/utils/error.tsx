/**
 * Default Error Callbacks
 */
/**
 * Login success callback stores refresh and access token localstorage
 * @param error any
 */
export function loginError(id: string, error: any) {
  console.log(error);
}
