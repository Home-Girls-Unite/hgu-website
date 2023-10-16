import {firstLetterUppercaseSentence} from './textTools'

export const LINKS = [
  {
    id: '1',
    path: '/',
    label: 'Home'
  },
  {
    id: '2',
    path: '/events',
    label: 'Events'
  },
  {
    id: '3',
    path: '/services',
    label: 'Services'
  },
  {
    id: '4',
    path: '/healing-corner',
    label: 'Healing Corner'
  },
  {
    id: '5',
    path: '/press',
    label: 'Funders/Press'
  },
  {
    id: '6',
    path: '/work-with-us',
    label: 'Work With Us'
  }
]

export const QUICK_LINKS = [
  ...LINKS,
  {
    id: '7',
    path: '/contact',
    label: 'Contact Us'
  }
]

export const ORGANIZATION_NAME = 'Home Girls Unite'

export const ANSWERS = [
  {
    id: '1',
    value: `${firstLetterUppercaseSentence('Home Girls is building a community of women who will understand, empower and support one another')}.`
  },
  {
    id: '2',
    value: firstLetterUppercaseSentence(
      'We support a niche but a large group of women who have been ignored for a long time. Many daughters we work with have suffered emotional, physical and financial abuse'
    )
  },
  {
    id: '3',
    value: `${firstLetterUppercaseSentence("Some women's paychecks go straight to their parents, and others are forced to look after younger siblings at the expense of their schooling or work")}.`
  },
  {
    id: '4',
    value: `${firstLetterUppercaseSentence('Consequently, they lose out on building a community, friendships and other relationships outside of the family')}.`
  }
]
