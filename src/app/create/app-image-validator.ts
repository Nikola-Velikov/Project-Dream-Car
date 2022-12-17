import { ValidatorFn } from '@angular/forms';

export function image(domains: string[]): ValidatorFn {
  // /^[^@]{6,}@gmail\.(com|bg)$/
  const domainString = domains.join('|');
  const re = /https:\/\/.+|http:\/\/.+/;
  return (control) => {
    return control.value === '' || re.test(control.value)
      ? null
      : { image: true };
  };
}
