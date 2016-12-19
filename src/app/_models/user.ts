export class User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  title: string;
  suffix: string;
  birth_month: string;
  birth_day: string;
  birth_year: string;
  company_name: string;
  company_title: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}