const blackListResponses: string[] = ['yes', "i don't know", 'no', "that's fine"];

const nonAcceptedResponses = (res: string): boolean =>
  blackListResponses.includes(res.toLowerCase());

export { nonAcceptedResponses };
