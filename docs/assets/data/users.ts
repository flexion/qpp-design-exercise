import {Injectable} from '@angular/core';

export const DATA_USERS = [
  {
    'id': 1,
    'email': 'user@presencehealth.org',
    'password': 'password',
    'title': '',
    'first_name': '',
    'middle_name': '',
    'last_name': '',
    'suffix': '',
    'company_name': '',
    'company_title': '',
    'address': '',
    'city': '',
    'state': '',
    'zip': '',
    'step': 'profile',
    'connections': [
      {
        'role': '1',
        'provider': {
          'id': 19,
          'name': 'Presence Holy Family Medical Center',
          'npi': '32234234'
        },
        'status': 1
      }
    ]
  },
  {
    'id': 2,
    'email': 'debra@test.com',
    'password': 'test',
    'first_name': 'Debra',
    'last_name': 'Tester',
    'company_name': 'Test Company',
    'title': '',
    'address': '1222 E Washington Ave.',
    'city': 'Madison',
    'state': 'WI',
    'zip': '55104',
    'company_title': 'Director of Case Management',
    'birth_month': 5,
    'birth_day': 5,
    'birth_year': 1981,
    'step': 'connect'
  },
  {
    'id': 1,
    'email': 'debra@test.com',
    'password': 'test',
    'first_name': 'Debra',
    'last_name': 'Tester',
    'company_name': 'Test Company',
    'title': '',
    'address': '1222 E Washington Ave.',
    'city': 'Madison',
    'state': 'WI',
    'zip': '55104',
    'token': 'fake-jwt-token',
    'company_title': 'Director of Case Management',
    'birth_month': 5,
    'birth_day': 5,
    'birth_year': 1981,
    'step': 'dashboard',
    'connections': [
      {
        'role': '1',
        'provider': {
          'id': 19,
          'name': 'practice 1',
          'npi': '32234234234'
        },
        'status': 0
      }
    ]
  }
];
