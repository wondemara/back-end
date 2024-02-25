import { DEFAULT_SERVER_ERROR, createSafeActionClient } from "next-safe-action";

/**
 * ActionError message will be returned to the client.
 * You can use it to display a message to the user.
 *
 *
 * @param message Error message.
 */
export class ActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ActionError";
  }
}

const handleServerError = (error: unknown) => {
  if (error instanceof ActionError) {
    return error.message;
  }

  return DEFAULT_SERVER_ERROR;
};

export const Authaction = createSafeActionClient({
  // We use the function we created above to handle errors.
  async middleware() {},
  handleReturnedServerError: handleServerError,
});
