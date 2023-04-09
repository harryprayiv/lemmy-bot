class ReprocessHandler {
  #minutesUntilReprocess?: number;

  constructor(minutesUntilReprocess?: number) {
    this.#minutesUntilReprocess = minutesUntilReprocess;
  }

  reprocess(minutes: number) {
    this.#minutesUntilReprocess = minutes;
  }

  preventReprocess() {
    this.#minutesUntilReprocess = undefined;
  }

  get() {
    return this.#minutesUntilReprocess;
  }
}

export const getReprocessFunctions = (minutes?: number) => {
  const { reprocess, preventReprocess, get } = new ReprocessHandler(minutes);

  return {
    reprocess,
    preventReprocess,
    get
  };
};
