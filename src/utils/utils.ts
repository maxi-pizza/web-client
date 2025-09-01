export const PHONE_UA_REGEX =
  /^(((\+)(38)))(([0-9]{3})|(\([0-9]{3}\)))(\-|\s)?(([0-9]{3})(\-|\s)?([0-9]{2})(\-|\s)?([0-9]{2})|([0-9]{2})(\-|\s)?([0-9]{2})(\-|\s)?([0-9]{3})|([0-9]{2})(\-|\s)?([0-9]{3})(\-|\s)?([0-9]{2}))$/;

export const isValidUkrainianNumber = (value: string) => {
  return PHONE_UA_REGEX.test(value ?? '');
};
